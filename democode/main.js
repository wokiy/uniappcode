import Vue from 'vue'
import App from './App'

//全局引入组件
import divider from "components/common/divider.vue";
Vue.component('divider',divider);


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
