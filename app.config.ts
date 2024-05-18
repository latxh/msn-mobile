import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    baseURL: "/msn-mobile/",
    preset: "static",
    output: { publicDir: "./docs" },
  },
});
