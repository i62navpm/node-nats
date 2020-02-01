import typescriptPlugin from 'rollup-plugin-typescript2'
import pkg from './package.json'

const deps = Object.keys(Object.assign({}, pkg.devDependencies))

const plugins = [typescriptPlugin()]

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins,
    external: deps,
  },
]
