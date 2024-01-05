import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

// https://stackoverflow.com/a/60584438/12287153
const mq = window.matchMedia('(prefers-color-scheme: dark)')

export default new Vuetify({
  theme: {
    dark: mq.matches,
    themes: {
      light: {
        primary: '#363636',
        secondary: '#ffffff',
        accent: '#23d160'
      },
      dark: {
        primary: '#363636',
        secondary: '#ffffff',
        accent: '#23d160'
      }
    }
  }
})
