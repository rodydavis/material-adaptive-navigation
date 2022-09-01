/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  base: "/material-adaptive-navigation/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
