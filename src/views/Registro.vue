<script setup lang="ts">
import { RolService } from "../services/rol.service";
import { ref, onMounted } from "@vue/runtime-core";
import { AuthService } from "../services/auth.service";
import { UserRegisterDto } from "../dto/user-register.dto";
import router from "../router";
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore() 

const http = new RolService();
const roles = ref<any>([]);
const tiposDoc = ref<any>([]);


const usuario = ref<UserRegisterDto>({
  rol: "SELECCIONE SU ROL",
  name: "",
  email: "",
  username: "",
  passWord: "",
  tipe_document: "TIPO DE DOCUMENTO",
  document: 0,
  phone: 0,
});

const validarDatosUsuario = () => {
  if (
    !usuario.value.rol ||
    !usuario.value.name ||
    !usuario.value.email ||
    !usuario.value.username ||
    !usuario.value.passWord ||
    !usuario.value.tipe_document ||
    usuario.value.document < 1 ||
    usuario.value.phone < 1
  )
    return false;
  return true;
};

const registro = async () => {
  const authService = new AuthService();
  const result = await authService.registrar(usuario.value);
  authStore.saveDatauser(result.token, result.user._id)
  router.push("/")
};

onMounted(async () => {
  roles.value = await http.listarRoles();
  tiposDoc.value = await http.listarTiposDocumentos();
});
</script>

<template>
  <!-- imagen de registro-->
  <div>
    <img class="arena" src="../assets/ArenaCenter.png" />
  </div>
  <!--inicio de formulario-->
  <form action="">
    <div class="card">
      <select v-model="usuario.rol">
        <option selected disabled>SELECCIONE SU ROL</option>
        <option v-for="rol in roles" :key="rol._id" :value="rol._id">
          {{ rol.name }}
        </option>
      </select>
    </div>

    <div>
      <input type="text" placeholder="Nombre" v-model="usuario.name" />
      <input type="email" placeholder="Correo" v-model="usuario.email" />
    </div>
    <div>
      <input
        type="text"
        placeholder="Nombre de usuario"
        v-model="usuario.username"
      />
      <input
        type="password"
        placeholder="Contraseña"
        v-model="usuario.passWord"
      />
    </div>
    <div>
      <select v-model="usuario.tipe_document">
        <option selected disabled>TIPO DE DOCUMENTO</option>
        <option v-for="doc in tiposDoc" :key="doc._id" :value="doc._id">
          {{ doc.name }}
        </option>
      </select>
      <input type="text" placeholder="documento" v-model="usuario.document" />
    </div>
    <div>
      <input type="text" placeholder="Numero celular" v-model="usuario.phone" />
    </div>
  </form>

  <!--envía formulario-->
  <div class="card">
    <button :disabled="!validarDatosUsuario" @click="registro()">
      Registrarme
    </button>
  </div>

  <!--redirige a login-->
  <RouterLink to="/login">Ya tengo cuenta</RouterLink>
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
