import babel from "rollup-plugin-babel";
import { eslint } from "rollup-plugin-eslint";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/main.js",
  plugins: [
    eslint({ exclude: ["dist/**"] }),
    babel({ exclude: "node_modules/**" }),
    uglify()
  ],
  output: {
    format: "iife",
    sourcemap: true,
    file: "dist/optionbox.min.js"
  }
};
