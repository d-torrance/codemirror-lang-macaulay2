import resolve from "@rollup/plugin-node-resolve"

export default {
  input: "demo/demo.js",
  output: {
    file: "demo/bundle.js",
    format: "iife",
    sourcemap: true
  },
  plugins: [resolve()]
}
