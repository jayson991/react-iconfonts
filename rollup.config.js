import babel from '@rollup/plugin-babel'
import {terser} from 'rollup-plugin-terser'

const config = {
  input: 'src/index.js',
  external: ['react'],
  output: {
    name: 'index.js',
    format: 'umd',
    globals: {
      react: 'React'
    },
    file: 'lib/index.js'
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    terser()
  ]
}

export default config
