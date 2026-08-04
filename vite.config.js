import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // The App.jsx bundles many embedded base64 images, so the output
    // chunk is large. Raise the warning limit instead of splitting,
    // since these assets are already inlined by design.
    chunkSizeWarningLimit: 20000,
  },
});
