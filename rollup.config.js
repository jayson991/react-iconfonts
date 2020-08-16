import babel from 'rollup-plugin-babel'

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
    })
  ]
}

export default config
