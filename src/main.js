
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import moment from 'moment'



import { Header, Swipe, SwipeItem, Button } from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)


import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui.ttf'
import './lib/mui/fonts/mui-icons-extra.ttf'
import './css/index.css'


import router from './router.js'
import app from './App.vue'

// 定义全局过滤器
Vue.filter('dataFormat', (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') => {
    return moment(dataStr).format(pattern)
})




var vm = new Vue({
    el: '#app',
    data: {
        
    },
    render: c => c(app),
    methods: {},
    router
})