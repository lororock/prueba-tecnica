<script setup lang="ts">

</script>

<template>
    <div>
      <img class="arena" src="../assets/ArenaCenter.png" />
    </div>
  
    <div class="card">
      <select>
        <option selected disabled>SELECCIONE SU ROL</option>
        <option value="Estudiante">Estudiante</option>
        <option value="Profesor">Profesor</option>
      </select>
    </div>
    
    <div>
      <input type="text" placeholder="Nombre" />
      <input type="email" placeholder="Correo" />
    </div>
    
    <div class="card"> 
      <button> click </button>
      
    </div>
    <a>Ya tengo cuenta</a>
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
  input:focus{
      color:#000000;
      background-color: #ffffff;
  }
  select{
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
  