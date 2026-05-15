import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js", // CommonJS: require() for Node.js
        format: "cjs",
        sourcemap: false,
      },
      {
        file: "dist/index.esm.js", // ESM: import for browsers and modern bundlers
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [typescript()],
    external: ["react"], // Don't bundle React
  },
  // 2. TypeScript type definitions
  {
    input: "src/index.ts",
    output: { file: "dist/index.d.ts", format: "esm" },
    plugins: [dts()],
  },
];
