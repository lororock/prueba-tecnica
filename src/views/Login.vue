<script setup lang="ts">

</script>

<template>
  <div>
    <img class="arena" src="../assets/ArenaCenter.png" />
  </div>

  <h1>login</h1>

  <div>
    <input type="email" placeholder="Correo" />
  </div>
  <div>
    <input type="password" placeholder="Contraseña" />
  </div>
  <div class="card">
    <button>Iniciar sesión</button>
  </div>
  <a>Registrarme</a>
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
