import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import solid from "vite-plugin-solid";

export default defineConfig({
    plugins: [solid(), dts({
        tsconfigPath: "../../tsconfig.app.json",
        outDir: "../../dist/types"
    })],
    build: {
        outDir: "../../dist",
        lib: {
            entry: "index.ts",
            fileName: "index",
            formats: ["cjs", "es"]
        },
        rollupOptions: {
            external: ["solid-js"]
        }
    }
})
