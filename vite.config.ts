/// <reference types="vitest" />

import { defineConfig } from "vite";
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
});
