import typescript from "@rollup/plugin-typescript";

const external = (id) => id != "tslib" && !/^(\.\.?\/|\w:)/.test(id);

export default [
  {
    input: "src/index.ts",
    external,
    output: [
      { file: "dist/index.cjs", format: "cjs" },
      { dir: "./dist", format: "es" },
    ],
    plugins: [typescript()],
  },
  {
    input: "src/legacy/index.ts",
    external,
    output: [
      { file: "dist/legacy/index.js", format: "es" },
      { file: "dist/legacy/index.cjs", format: "cjs" },
    ],
    plugins: [
      typescript({ outDir: "dist/legacy", declarationDir: "dist/legacy" }),
    ],
  },
];
