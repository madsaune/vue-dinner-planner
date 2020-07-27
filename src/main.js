import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import Home from './containers/Home.vue';
import Recipes from './containers/Recipes.vue';
import Recipe from './containers/Recipe.vue';
import recipes from './data/recipes';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes,
    },
    {
      path: '/recipes/:id',
      name: 'singleRecipe',
      component: Recipe
    },
  ],
});

const store = new Vuex.Store({
  state: {
    recipes,
  },
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
