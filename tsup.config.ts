import { defineConfig } from "tsup";

export default defineConfig({
  entry: { index: "src/index.ts" },
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  esbuildOptions(options) {
    options.resolveExtensions = [
      '.web.tsx', '.web.ts', '.web.jsx', '.tsx', '.ts', '.jsx', '.js', '.json'
    ]
  },
});

