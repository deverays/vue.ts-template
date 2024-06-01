import { createRouter, createWebHistory } from 'vue-router'
import imports from '@/utils/imports'

const publicRoutes = [
  {
    name: 'home',
    path: '/',
    component: () => import('../views/home')
  }
]

const exampleRoutes = [
  {
    path: '/example',
    redirect: '/',
    children: [
      {
        name: 'test',
        path: 'test',
        redirect: '/test'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes, ...exampleRoutes, { path: '/:pathMatch(.*)', redirect: '/' }]
})

router.beforeEach((to, from, next) => {
  const { store, watch } = imports()
  document.title = import.meta.env.VITE_PROJECT_TITLE

  const authReq = ['test']

  watch(
    () => store._isLogin,
    (value) => {
      if (value && authReq.includes(to.name as string)) router.push('/')
    }
  )

  next()
})

export default router
