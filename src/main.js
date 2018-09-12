// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ECharts from 'vue-echarts/components/ECharts.vue'

// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/chart/line'
// import 'echarts/lib/component/polar'

Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
let app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

// app.$Message.config({
//     top: 50,
//     duration: 3
// });

// 响应拦截（配置请求回来的信息）
// Axios.interceptors.response.use(
//     _response => {
//         console.log('_response.data.code = ' + _response.data.code)
//         console.log('_response.data.msg  = ' + _response.data.msg)
//         console.log(_response.data)
//             // 如果jwt无效 跳转登录界面
//         if (_response.data.code == -10000) router.push({ path: '/login' })
//         return _response
//     },
//     _error => {
//         console.log(_error)
//             iview_app.$Message.destroy()
//             iview_app.$Message.error({
//               content: 'Server Error',
//               duration: 3
//             })
//         return Promise.reject(_error)
//     })