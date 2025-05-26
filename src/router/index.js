import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage2.vue'
import SecondPage from '../pages/HomePage.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/exhome', name: 'Home', component: HomePage },
  {path: '/home', name: "Second", component: SecondPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router