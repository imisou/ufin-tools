import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';

export default defineConfig({
  input: 'types/src/index.d.ts',
  output: [{ file: 'libs/tools.d.ts', format: 'es' }],
  plugins: [dts()],
});
