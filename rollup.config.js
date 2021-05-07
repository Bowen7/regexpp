import resolve from "rollup-plugin-node-resolve"
import sourcemaps from "rollup-plugin-sourcemaps"

export default [
    {
        input: ".temp/index.js",
        output: {
            file: "dist/index.js",
            format: "cjs",
            sourcemap: true,
            sourcemapFile: "dist/index.js.map",
            banner:
                "/*! @author Toru Nagashima <https://github.com/mysticatea> */",
        },
        plugins: [sourcemaps(), resolve()],
    },
    {
        input: ".temp/index.js",
        output: {
            file: "dist/index.mjs",
            format: "es",
            sourcemap: true,
            sourcemapFile: "dist/index.mjs.map",
            banner:
                "/*! @author Toru Nagashima <https://github.com/mysticatea> */",
        },
        plugins: [sourcemaps(), resolve()],
    },
]
