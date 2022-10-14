<script setup lang="ts"></script>

<template>
  <!--imprime nombre del estudiante-->
  <h1>Nombre del estudiante</h1>

  <!--inicio de formulario-->
  <form action="">

    <input type="text" name="" placeholder="Nombre De Profesor" />
    <div>
      <input type="text" placeholder="Tarea Por Realizar" />
    </div>
    <h3>Descripción</h3>
    <div>
      <textarea class="inp-area"></textarea>
    </div>
    <h3>Solución</h3>
    <div>
      <textarea class="inp-area"></textarea>
    </div>
    
  </form>

  <!--envía formulario-->
  <button>Enviar</button>
</template>

<style scoped>
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

.inp-area {
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
