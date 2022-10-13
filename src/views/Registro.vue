<script setup lang="ts">
import { RolService } from "../services/rol.service";
import { ref, onMounted } from "@vue/runtime-core";
import { AuthService } from "../services/auth.service"

const http = new RolService();
const roles = ref<any>([]);
const tiposDoc = ref<any>([]);
onMounted(async () => {
  roles.value = await http.listarRoles();
  tiposDoc.value = await http.listarTiposDocumentos();
});


const usuario = {rol:'SELECCIONE SU ROL', name:'', email:'', username:'', passWord:'', tipe_document:'TIPO DE DOCUMENTO', document:'', phone:null};
const registro = async () => {
  const authService = new AuthService();
  const result = await authService.registrar(usuario);
// authService.registrar(usuario);
console.log(result);


};
</script>

<template>
  <div>
    <img class="arena" src="../assets/ArenaCenter.png" />
  </div>
  <div class="card">
    
    <select v-model="usuario.rol">
      <option selected disabled>SELECCIONE SU ROL</option>
      <option v-for="rol in roles" :key="rol._id" :value="rol._id">{{rol.name}}</option>
    </select>
  </div>

  <div>
    <input type="text" placeholder="Nombre" v-model="usuario.name"/>
    <input type="email" placeholder="Correo" v-model="usuario.email"/>
  </div>
  <div>
    <input type="text" placeholder="Nombre de usuario" v-model="usuario.username" />
    <input type="password" placeholder="Contraseña" v-model="usuario.passWord"/>
  </div>
  <div>
    <select v-model="usuario.tipe_document">
      <option selected disabled>TIPO DE DOCUMENTO</option>
      <option v-for="doc in tiposDoc" :key="doc._id" :value="doc._id">{{doc.name}}</option>
    </select>
    <input type="text" placeholder="documento" v-model="usuario.document" />
  </div>
  <div>
    <input type="text" placeholder="Numero celular" v-model="usuario.phone"/>
  </div>
  <div class="card">
    <button @click="registro()">Registrarme</button>
  </div>
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
