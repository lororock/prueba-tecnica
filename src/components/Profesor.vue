<script setup lang="ts">

</script>

<template>
  <div>
    <h1>nombre profesor</h1>
  </div>
  <div>
    Calificación: <input type="number">
  </div>
  <p>Observación: </p>
  <div>
    <textarea class="inp-area"></textarea>
  </div>
  
  <button> Enviar </button>

</template>

<style scoped>
.inp-area{
  color: #fff;
  background-color: #c8960c;
  padding: 20px 20px 20px 20px;

  width: 257px;
  height: 81px;
}
.inp-area:focus {
  color: #000000;
  background-color: #ffffff;
}
</style>
