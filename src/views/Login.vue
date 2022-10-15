<script setup lang="ts">
import { ref, } from "@vue/runtime-core";
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
  console.log(result)
  authStore.saveDatauser(result.token, result.user._id);
  router.push("/");
};
</script>

<template>
  <!-- imagen de login-->
  <div>
    <img class="arena" src="../assets/ArenaCenter.png" />
  </div>

  <h1>login</h1>

  <!--inicio de formulario-->
  <form action="">
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
  </form>

  <!--envía formulario-->
  <div class="card">
    <button @click="login()">Iniciar sesión</button>
  </div>

  <!--redirige al registro-->
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
