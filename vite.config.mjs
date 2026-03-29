import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const htmlEntry = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: htmlEntry("./index.html"),
        europe: htmlEntry("./europe.html"),
        ecuador: htmlEntry("./ecuador.html"),
        serbia: htmlEntry("./serbia.html"),
        privacy: htmlEntry("./privacy.html"),
        terms: htmlEntry("./terms.html"),
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 4444,
  },
  preview: {
    host: "0.0.0.0",
    port: 4444,
  },
});
