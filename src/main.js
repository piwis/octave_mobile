import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'


import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false


Vue.use(new VueSocketIO({
    debug: true,
    // Mettre le server nodejs
    connection: 'https://octaserve.suriteka.website',
    vuex: {
    }
}))

/* eslint-disable no-new */
// new Vue({
//     el: '#app',
//     router,
//     template: '<App/>',
//     components: {App}
// }).$mount('#app')

new Vue({
    router,
    template: '<App/>',
    components: {App},
    render: h => h(App)
}).$mount('#app')
