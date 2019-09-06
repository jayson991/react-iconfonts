import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

const config = {
  input: 'src/index.js',
  external: ['react'],
  output: {
    name: 'react-iconfonts.js',
    format: 'umd',
    globals: {
      react: 'React'
    },
    file: 'lib/index.js'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}

export default config
