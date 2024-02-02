import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    console.log("Building library");
    return {
      plugins: [react()],
      publicDir: false,
      build: {
        lib: {
          entry: {
            buttons: "lib/components/buttons/index.ts",
            composite: "lib/components/composite/index.ts",
            core: "lib/components/core/index.ts",
            display: "lib/components/display/index.js",
            layout: "lib/components/layout/index.js",
            navigation: "lib/components/navigation/index.ts",
            theme: "lib/components/theme/index.ts",
            main: "index.html",
          },
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
    };
  } else {
    console.log("Building preview app");
    const base =
      mode === "production" ? "https://usace.github.io/groundwork/" : "";
    return {
      plugins: [react()],
      base: base,
      build: {
        outDir: "docs",
      },
    };
  }
});
