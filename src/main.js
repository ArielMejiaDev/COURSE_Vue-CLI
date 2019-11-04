import Vue from 'vue'
import App from './App.vue'
import SimpleList from './components/SimpleList'
import Currency from './components/Currency'
import Posts from './components/Posts'
import NotFound from './components/404'
import Parent from './components/Parent'



Vue.config.productionTip = false

const routes = {
  '/': App,
  '/simple-list': SimpleList,
  '/currency': Currency, 
  '/posts': Posts,
  '/parent': Parent
}

new Vue({

  data:{
    currentRoute: window.location.pathname,
  },

  computed: {
    currentComponent(){
      return routes[this.currentRoute] || NotFound
    }
  },

  render: function(h){
    return h(this.currentComponent);
  },

}).$mount('#app')
