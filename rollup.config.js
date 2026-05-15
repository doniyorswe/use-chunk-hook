import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default [
  // 1. Asosiy JavaScript build
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js", // CommonJS: require() uchun
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.js", // ESM: import uchun
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [typescript()],
    external: ["react"], // React'ni bundle'ga qo'shma!
  },

  // 2. TypeScript tiplar build
  {
    input: "src/index.ts",
    output: { file: "dist/index.d.ts", format: "esm" },
    plugins: [dts()],
  },
];
