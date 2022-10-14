<script setup lang="ts">
import { RolService } from "../services/rol.service";
import { onMounted, ref, watch } from "@vue/runtime-core";
import { useAuthStore } from "../store/auth";
import router from "../router";
import estudiante from "../components/Estudiante.vue";
import profesor from "../components/Profesor.vue";



const authStore = useAuthStore();

const http = new RolService();
const roles = ref<any>([]);

const logout = () => {
  authStore.logoutUser();
  router.push("/login");
};

onMounted(async () => {
  roles.value = await http.listarRoles();
});
</script>

<template>
  <button @click="logout()">Cerrar sesión</button>
  <div>
    <estudiante />
  </div >
  <div>
    <profesor />
  </div>
</template>

<style scoped>
button{
  background-color: rgb(142, 14, 14);
  
}
</style>

