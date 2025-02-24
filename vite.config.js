import { defineConfig } from "vite";

export default defineConfig({
  base: "/spill/",
  optimizeDeps: {
    include: ["@dnb/eufemia"],
  },
});
