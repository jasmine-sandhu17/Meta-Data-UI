import { createApp } from 'vue'

// dependencies
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
})
const pinia = createPinia()
createApp(App).use(pinia)
createApp(App).use(vuetify).mount('#app')
