import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // если index.html в корне
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "./index.html",
    },
  },
});
