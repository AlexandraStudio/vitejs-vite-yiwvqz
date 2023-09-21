import { defineConfig } from "vite";
import path from "path";
import { glob } from "glob";
import handlebars from "vite-plugin-handlebars";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  optimizeDeps: { exclude: ["swiper"] },
  server: {
    open: "./main.html",
    fs: {
      allow: ["."],
    },
  },
  plugins: [
    handlebars({
      partialDirectory: "./src/partials",
    }),
    ViteImageOptimizer(),
  ],

  build: {
    rollupOptions: {
      input: glob.sync("./src/html/*.html").concat(["./src/css/global.css"]),
    },
  },
});
