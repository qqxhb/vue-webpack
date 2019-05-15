// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
import Vue from 'vue'
import App from './todoApp.vue'

import './assets/styles/global.styl';

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App) // h是vue中createElement函数,是用来生成HTML DOM元素,这个函数的作用就是生成一个VNode节点，render函数得到这个VNode节点之后，返回给Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上。
}).$mount(root)
