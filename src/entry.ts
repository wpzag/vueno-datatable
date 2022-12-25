import type { App } from 'vue'
import 'uno.css'
import '@/assets/style.scss'

import VDatatable from './components/VDatatable.vue'

export default function install(app: App) {
  app.component('VDatatable', VDatatable)
}
