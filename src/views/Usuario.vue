<script setup lang="ts">
import { RolService } from "../services/rol.service";
import { onMounted, ref } from "@vue/runtime-core";
import { useAuthStore } from "../store/auth";
import router from "../router";
import { UserService } from "../services/user.service";
import { UserRegisterDto } from "../dto/user-register.dto";

import Estudiante from "/src/components/Estudiante.vue";
import Profesor from "/src/components/Profesor.vue";

const authStore = useAuthStore();

const http = new RolService();
const httpUser = new UserService();

const roles = ref<any>([]);
const tipoDocumentos = ref<any>([]);
const datosUsuario = ref<Partial<UserRegisterDto>>({});

const logout = () => {
  authStore.logoutUser();
  router.push("/login");
};

onMounted(async () => {
  authStore.reloadUserData();
  datosUsuario.value = await httpUser.getDatosUsuario(
    authStore.idUser || "",
    authStore.token || ""
  );
  roles.value = await http.listarRoles();
  tipoDocumentos.value = await http.listarTiposDocumentos();
});
</script>

<template>
  <button @click="logout()">Cerrar sesión</button>
  <h1>
    {{ datosUsuario.name }}
  </h1>
  <Estudiante v-if="datosUsuario.rol === '6341b509ee0c46a68e80fec1'" />
  <Profesor v-if="datosUsuario.rol === '6341b4f9ee0c46a68e80fec0'" />
</template>

<style scoped>
button {
  background-color: rgb(142, 14, 14);
}
</style>
