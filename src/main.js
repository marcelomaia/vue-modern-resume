import '@/plugins/vuetify'
import '@/components'

import App from '@/App.vue'
import Vue from 'vue'
import helper from '@/plugins/helper'
import i18n from '@/plugins/i18n'

Vue.config.productionTip = false
Vue.use(helper)


new Vue({ render: (h) => h(App), i18n }).$mount('#app')
