import typescript from "rollup-plugin-typescript";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

const env = process.env.NODE_ENV;

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true,
    strict: true
  },
  plugins: [
    typescript({
      typescript: require("typescript")
    }),
    nodeResolve({
      jsnext: true
    }),
    commonjs({
      include: "node_modules/**"
    })
  ]
};
