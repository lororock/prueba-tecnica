<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { TareaService } from "../services/tarea.services";
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore();

const httpTareas = new TareaService();

const tareas = ref<any[]>([]);

const datosTarea = ref({
  calification: 0,
  observations: "",
});

const validarCalificacion = computed(() => {
  if (datosTarea.value.calification < 0 || !datosTarea.value.observations)
    return false;
  return true;
});

const idTarea = ref("Seleccione tarea");

const calificarTarea = async () => {
  try {
    await httpTareas.actualizarTarea(
      idTarea.value,
      datosTarea.value,
      authStore.token || ""
    );
    datosTarea.value.calification = 0;
    datosTarea.value.observations = "";
    alert("Tarea calificada");
  } catch (error) {
    alert("Algo salio mal");
  }
};

onMounted(async () => {
  authStore.reloadUserData();
  tareas.value = await httpTareas.getTareasProfesor(
    authStore.idUser || "",
    authStore.token || ""
  );
});
</script>

<template>
  <!--inicio de formulario-->
  <form action="">
    <select v-model="idTarea">
      <option selected disabled>Seleccione tarea</option>
      <option v-for="tarea in tareas" :key="tarea._id" :value="tarea._id">
        {{ tarea.name }}
      </option>
    </select>
    <h2>Calificacion:</h2>
    <div>
      <label for=""></label>
      <input type="number" v-model="datosTarea.calification" />
    </div>
    <p>Observación:</p>
    <div>
      <textarea v-model="datosTarea.observations" class="inp-area"></textarea>
    </div>
  </form>

  <!--envía formulario-->
  <button :disabled="!validarCalificacion" @click="calificarTarea">
    Enviar
  </button>
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
