import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import pkg from "./package.json";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    console.log("Building library");
    return {
      plugins: [react(), tailwindcss()],
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
  } else {
    console.log("Building preview app", mode);
    const base =
      mode === "production"
        ? "https://usace.github.io/groundwork/#"
        : "http://localhost:5173";
    return {
      plugins: [react()],
      base: base,
      build: {
        outDir: "docs",
      },
      define: {
        "import.meta.env.PKG_VERSION": JSON.stringify(pkg.version),
      },
    };
  }
});
