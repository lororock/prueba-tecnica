<script setup lang="ts">
import { TareaService } from "../services/tarea.services";

</script>

<template>
  <!--imprime nombre del profesor-->
  <h1>nombre profesor</h1>

  <!--inicio de formulario-->

  <form action="">
    <div>
      <select name="" id="">
        <option value=""></option>
      </select>
    </div>
    <div><label for="">Calificacion:</label> <input type="number" /></div>
    <p>Observación:</p>
    <div>
      <textarea class="inp-area"></textarea>
    </div>
  </form>

  <!--envía formulario-->
  <button>Enviar</button>
</template>

<style scoped>
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
