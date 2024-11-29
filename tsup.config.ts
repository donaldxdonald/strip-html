import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts', './src/cli.ts'],
  splitting: true,
  dts: true,
  format: 'esm',
})
