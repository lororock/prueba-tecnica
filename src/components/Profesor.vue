<script setup lang="ts">
import { onMounted, ref } from "vue";
import { TareaService } from "../services/tarea.services";
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore();

const httpTareas = new TareaService()

const tareas = ref<any[]>([])

const datosTarea = ref({
  calification: 0,
  observations: ''
})

const idTarea = ref('')

const calificarTarea = async () => {
  await httpTareas.actualizarTarea(idTarea.value, datosTarea.value, authStore.token || '' )
  datosTarea.value.calification = 0
  datosTarea.value.observations = ''
}

onMounted(async () => {
  authStore.reloadUserData()
  tareas.value = await httpTareas.getTareasProfesor(authStore.idUser || '', authStore.token|| '')
})
</script>

<template>
  <!--inicio de formulario-->
  <form action="">
    <select v-model="idTarea">
      <option selected disabled>TIPO DE DOCUMENTO</option>
      <option v-for="tarea in tareas" :key="tarea._id" :value="tarea._id">
        {{ tarea.name }}
      </option>
    </select>
    <div><label for="">Calificacion:</label> <input type="number" v-model="datosTarea.calification" /></div>
    <p>Observación:</p>
    <div>
      <textarea v-model="datosTarea.observations" class="inp-area"></textarea>
    </div>
  </form>

  <!--envía formulario-->
  <button @click="calificarTarea">Enviar</button>
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
