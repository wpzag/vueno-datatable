import DefaultTheme from 'vitepress/theme'
import './reset.css'
import 'vueno-datatable/dist/style.css'
import 'uno.css'
import vuenoDatatable from 'vueno-datatable'
const extractFileNameFromPath = (path) => path.split('/').at(-1).split('.')[0]

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(vuenoDatatable)

    const demos = import.meta.globEager('../../components/**/*.vue')

    for (const path in demos)
      app.component(extractFileNameFromPath(path), demos[path].default)
  },
}
