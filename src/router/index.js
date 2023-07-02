import { createRouter, createWebHistory } from 'vue-router'
import { usePortfolioStore } from '../stores/portfolio'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Index from '../views/dashboard/Index.vue'
import DashboardView from '../views/dashboard/DashboardView.vue'
import WorksView from '../views/dashboard/WorksView.vue'
import NewWorkView from '../views/dashboard/NewWorkView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: 'home',
      component: HomeView,
    },
    {
      path: "/login",
      name: 'login',
      component: LoginView,
    },
    {
      path: "/dashboard",
      name: 'index',
      component: Index,
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: 'dashboard',
          component: DashboardView,
        },
        {
          path: "works",
          name: 'works',
          component: WorksView,
        },
        {
          path: "works/new",
          name: 'new-work',
          component: NewWorkView,
        }
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const store = usePortfolioStore()
  // to and from are both route objects. must call `next`.
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.isLoggedIn) { next() }
    else {next('/login')}
  }
  else {
    next()
  }
})

export default router