import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/home', name: 'Home', component: HomePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router