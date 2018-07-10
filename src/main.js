
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(Mint)

import { Header } from 'mint-ui'

Vue.component(Header.name, Header)

import 'font-awesome/css/font-awesome.min.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/fonts/mui.ttf'


import app from './App.vue'




var vm = new Vue({
    el: '#app',
    data: {
        
    },
    render: c => c(app),
    methods: {}
})