import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  optimizeDeps: {
    include: ["@dnb/eufemia"],
  },
});
