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


export default router;