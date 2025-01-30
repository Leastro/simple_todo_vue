import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

/*const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
  ,
  {
    path: '/Main',
    name: 'Main',
    component: () => import('../views/MainView.vue')
  }
]
*/

const routes = [
  {
  path: '/',
  name: 'main',
  component: MainView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


export default router
