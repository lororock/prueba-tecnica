import { createRouter, createWebHistory } from "vue-router";

import Registro from "../views/Registro.vue"
import Usuario from '../views/Usuario.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'user',
      component: Usuario,
      meta: {
        requiredAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/registro",
      name: "registro",
      component: Registro
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (
    to.matched.some((route) => route.meta.requiredAuth)
  ) {
    if (!localStorage.getItem('token') || !localStorage.getItem("_id")) {
      return { name: 'login' }
    }
  }
})

export default router;