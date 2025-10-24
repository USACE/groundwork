import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";
import { execFileSync } from "child_process";
import path from "path";
import fs from "fs";

const LHCI_PREFIX = process.env.LHCI_PREFIX || "http://localhost:5173/";

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
    return {
      plugins: [react()],
      publicDir: false,
      build: {
        lib: {
          name: "Groundwork",
          fileName: (format) => `groundwork.${format}.js`,
          entry: "lib/index.jsx",
        },
        rollupOptions: {
          external: ["react", "react-dom", "react/jsx-runtime"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
              "react/jsx-runtime": "ReactJsxRuntime",
            },
          },
        },
      },
    };
  }

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
