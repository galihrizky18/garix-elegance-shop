import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

import path from "node:path";

export default defineConfig({
    resolve: {
        alias: {
            "@asset": path.resolve(__dirname, "public/asset"),
        },
    },
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
        }),
        react(),
    ],
});
