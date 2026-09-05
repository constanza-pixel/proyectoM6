/* Función: Punto de entrada de la aplicación.
• Acciones:
• Crea la app con createApp(app).
• Conecta el router y el store (app.use(router), app.use(store)).
• Monta la aplicación en app.mount('#app') */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
