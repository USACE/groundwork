import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import pkg from "./package.json";
import { execFileSync } from "child_process";
import path from "path";
import fs from "fs";

const LHCI_PREFIX = process.env.LHCI_PREFIX || "http://localhost:5173/";
const externalPackages = [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
];
const isExternalPackage = (id) =>
  externalPackages.some((name) => id === name || id.startsWith(`${name}/`));
const libraryAssetFileNames = (assetInfo) => {
  if (assetInfo.name?.endsWith(".css")) {
    return "groundwork.css";
  }
  return "assets/[name][extname]";
};
const removeCssEntrypointPlugin = (fileName) => ({
  name: "remove-css-entrypoint",
  closeBundle() {
    const filePath = path.resolve("dist", fileName);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  },
});

function RoutesToLHCIPlugin() {
  return {
    name: "routes-to-lhci",
    apply: "build",
    closeBundle() {
      // After build, regenerate .lighthouserc.gen.json from routes
      const node = process.execPath;
      const script = path.resolve("scripts/extract-routes.js");
      if (!fs.existsSync(script)) {
        console.warn("[routes-to-lhci] scripts/extract-routes.js not found");
        return;
      }
      try {
        execFileSync(node, [script], {
          stdio: "inherit",
          env: { LHCI_PREFIX },
        });
      } catch (e) {
        console.error("[routes-to-lhci] failed to generate LHCI config", e);
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    console.log("Building library");
    return {
      plugins: [react(), tailwindcss()],
      publicDir: false,
      build: {
        lib: {
          name: "Groundwork",
          fileName: (format) =>
            format === "umd" ? "groundwork.umd.cjs" : "index.js",
          entry: "lib/index.jsx",
          formats: ["es", "umd"],
        },
        rollupOptions: {
          external: isExternalPackage,
          output: [
            {
              format: "es",
              dir: "dist",
              preserveModules: true,
              preserveModulesRoot: "lib",
              entryFileNames: "es/[name].js",
              chunkFileNames: "es/chunks/[name]-[hash].js",
              assetFileNames: libraryAssetFileNames,
            },
            {
              format: "umd",
              name: "Groundwork",
              entryFileNames: "groundwork.umd.cjs",
              assetFileNames: libraryAssetFileNames,
              globals: {
                react: "React",
                "react-dom": "ReactDOM",
                "react/jsx-runtime": "ReactJsxRuntime",
              },
            },
          ],
        },
      },
    };
  }

  if (mode === "css") {
    console.log("Building library CSS");
    return {
      plugins: [react(), tailwindcss(), removeCssEntrypointPlugin("style.js")],
      publicDir: false,
      build: {
        emptyOutDir: false,
        lib: {
          entry: "lib/style-entry.js",
          name: "GroundworkStyles",
          fileName: () => "style.js",
          formats: ["es"],
        },
        rollupOptions: {
          output: {
            assetFileNames: libraryAssetFileNames,
          },
        },
      },
    };
  }

  console.log("Building preview app", mode);
  const base =
    mode === "production"
      ? "https://usace.github.io/groundwork/"
      : "http://localhost:5173/";

  return {
    plugins: [react(), RoutesToLHCIPlugin()],
    base,
    build: { outDir: "docs" },
    define: { "import.meta.env.PKG_VERSION": JSON.stringify(pkg.version) },
  };
});
