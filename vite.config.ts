import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { fileURLToPath } from 'url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    dts({
      outputDir: 'dist/types',
      insertTypesEntry: true,
    }),

    AutoImport({
      imports: ['vue'],
      dts: true,
      dirs: ['./src/composables/**', './src/helpers/**'],
      vueTemplate: true,
    }),
    Components({
      dts: true,
      dirs: ['src/components'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/entry.ts'),
      name: 'vueno-datatable',
      fileName: 'vueno-datatable',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
