import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);


// 导入组件库
import EdUI from './../packages/index'
// // 注册组件库
Vue.use(EdUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
