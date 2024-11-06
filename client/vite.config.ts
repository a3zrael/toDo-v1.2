import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  build: {
    outDir: "dist", // Папка для собранных файлов, чтобы соответствовать Docker-конфигу
    target: "esnext", // Настраивает поддержку современных функций JS
    cssCodeSplit: true, // Убирает дублирование CSS и улучшает загрузку
  },
  server: {
    port: 3000, // Если нужно изменить порт для локальной разработки
    host: "0.0.0.0", // Важно для доступа к контейнеру через localhost
  },
});
