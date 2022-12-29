import { defineConfig } from "rollup"
import esbuild from "rollup-plugin-esbuild"

export default {
  input: "sources/index.tsx",
  external: [
    "preact/jsx-runtime",
    "preact-render-to-string",
    "preact-router",
    "preact/compat"
  ],
  plugins: [
    esbuild({
      jsx: "automatic",
      jsxImportSource: "preact"
    })
  ],
  output: {
    inlineDynamicImports: true,
    file: "build/index.js",
    format: "esm"
  }
}
