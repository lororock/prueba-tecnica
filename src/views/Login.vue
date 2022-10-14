<script setup lang="ts">
import { ref, onMounted } from "@vue/runtime-core";
import router from "../router";
import { AuthService } from "../services/auth.service";
import { useAuthStore } from "../store/auth";

const authService = new AuthService();
const authStore = useAuthStore();

const usuario = ref({
  userinfo: "",
  passWord: "",
});

const login = async () => {
  const result = await authService.login(usuario.value);
  authStore.saveToken("13231223fjajsd");
  router.push("/");
};
</script>

<template>
  <div>
    <img class="arena" src="../assets/ArenaCenter.png" />
  </div>

  <h1>login</h1>
  <div>
    <input
      type="text"
      placeholder="Nombre De Usuario"
      v-model="usuario.userinfo"
    />
  </div>
  <div>
    <input
      type="password"
      placeholder="Contraseña"
      v-model="usuario.passWord"
    />
  </div>
  <div class="card">
    <button @click="login()">Iniciar sesión</button>
  </div>
  <RouterLink to="/registro">Registrarme</RouterLink>
</template>

<style scoped>
.arena {
  width: 300px;
  height: 300px;
}
input {
  color: #fff;
  background-color: #c8960c;
  padding: 10px 0px 10px 0px;
  text-align: center;
  margin: 5px;
  font: 1em sans-serif;
  border-radius: 10px;
  border: none;
}
input:focus {
  color: #000000;
  background-color: #ffffff;
}
select {
  color: #fff;
  background-color: #c8960c;
  padding: 10px 0px 10px 10px;
  text-align: center;
  margin: 5px;
  font: 1em sans-serif;
  border-radius: 10px;
  border: none;
}
</style>
