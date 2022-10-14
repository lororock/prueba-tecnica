<script setup lang="ts">
import { RolService } from "../services/rol.service";
import { onMounted, ref, watch } from "@vue/runtime-core";
import { useAuthStore } from "../store/auth";
import router from "../router";

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
  <div>
    <select>
      <option v-for="role in roles" :key="role._id">{{ role.name }}</option>
    </select>
  </div>
  <button @click="logout()">Cerrar Sesión</button>
</template>
