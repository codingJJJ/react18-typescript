const { defineConfig } = require("vite");
// import react from "@vitejs/plugin-react";

const path = require("path");

console.log();

defineConfig({
  // plugins: [react()],
  resolve: {
    alias: {
      "/react1": "../react/index.ts",
    },
  },
});
