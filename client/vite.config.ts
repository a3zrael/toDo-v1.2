import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import VitePluginChecker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    VitePluginChecker({
      typescript: true,
      eslint: {
        lintCommand: "eslint src --ext .ts,.tsx",
      },
    }),
  ],
});
