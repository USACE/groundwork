import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
const dirname =
  typeof __dirname === "undefined"
    ? path.dirname(fileURLToPath(import.meta.url))
    : __dirname;

export default defineConfig({
  plugins: [react()],
  test: {
    silent: "passed-only",
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          // Retry once on failure. Storybook+vitest's browser-mode dep
          // optimizer occasionally loses a race when vite re-bundles deps
          // mid-load — a test file's import 404s with "Failed to fetch
          // dynamically imported module" using a now-invalid `?v=...` URL.
          // The cache (see .github/workflows/build.yml) covers the broad
          // case; this retry handles the residual single-file flake.
          retry: 1,
          browser: {
            enabled: true,
            provider: playwright(),
            headless: true,
            // https://vitest.dev/config/browser/playwright
            instances: [
              {browser: 'chromium', headless: true}
            ],
          },
        } 
      }
    ]    
  },
})
