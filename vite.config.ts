import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
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
});

// export default defineConfig(({ command }) => {
//   const config = {
//     plugins: [react()],
//   };

//   if(command === 'build'){
//     const homepage = "https://usace.github.io/groundwork";
//     return {
//       ...config,
//       ...{
//       lib: {
//         entry: "lib/index.ts",
//         name: "Groundwork",
//         fileName: (format) => `groundwork.${format}.js`,
//       },
//       rollupOptions: {
//         external: ["react", "react-dom"],
//         output: {
//           globals: {
//             react: "React",
//             "react-dom": "ReactDOM",
//           },
//         },
//       },
//     }
//     }
//   }
// });
