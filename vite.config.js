import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  extend: {
    keyframes: {
      typing: {
        "0%": { width: "0%", visibility: "hidden" },
        "100%": { width: "100%" },
      },
      blink: {
        "50%": { borderColor: "transparent" },
        "100%": { borderColor: "white" },
      },
    },
    animation: {
      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
    },
  },
});
