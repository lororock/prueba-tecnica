<script setup lang="ts">
import { RolService } from "../services/rol.service";
import { onMounted, ref } from "@vue/runtime-core";

const http = new RolService();
const roles = ref<any>([]);
onMounted(async () => {
  roles.value = await http.listarRoles();
});

console.log(roles);
</script>

<template>
  <select >
    <option  v-for="role in roles" :key="role._id"  >{{role.name}}</option>
  </select>
</template>
