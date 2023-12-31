import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      writeBundle() {
        fs.renameSync(
          path.resolve(__dirname, "dist/index.html"),
          path.resolve(__dirname, "dist/product.html")
        );
        fs.renameSync(
          path.resolve(__dirname, "dist/homepage.html"),
          path.resolve(__dirname, "dist/index.html")
        );
      },
    },
  ],
  server: {
    open: "/homepage.html",
  },
});
