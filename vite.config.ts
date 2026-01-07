import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      "/api": {
        target: "https://backend-server-gunel.vercel.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
