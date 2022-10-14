<script setup lang="ts">
import { computed, reactive } from "vue";
import { Tarea } from "../dto/tarea.dto";
import { TareaService } from "../services/tarea.services";
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore();

const nuevaTarea = reactive<Tarea>({
  description: "",
  name: "",
  professorId: "6341c91bbb849ec4de641431",
  solution: "",
  studentId: "6341b90bfacec9ef21f6b02c",
});

const http = new TareaService();

const validarTarea = computed(() => {
  if (
    !nuevaTarea.description ||
    !nuevaTarea.name ||
    !nuevaTarea.professorId ||
    !nuevaTarea.solution ||
    !authStore.idUser
  )
    return false;
  return true;
});

const crearTarea = async () => {
  await http.crearTarea(nuevaTarea, authStore.token || "");
};

const eliminarTarea = async (idTarea: string) => {
  await http.eliminarTarea(idTarea, authStore.token || "");
};
</script>

<template>
  <div>
    <!--imprime nombre del estudiante-->
    <h1>Nombre del estudiante</h1>

    <!--inicio de formulario-->
    <input
      v-model="nuevaTarea.professorId"
      type="text"
      name=""
      placeholder="Nombre De Profesor"
    />
  </div>
  <div>
    <input
      v-model="nuevaTarea.name"
      type="text"
      placeholder="Tarea Por Realizar"
    />
  </div>
  <h3>Descripción</h3>
  <div>
    <textarea v-model="nuevaTarea.description" class="inp-area"></textarea>
  </div>
  <h3>Solución</h3>
  <div>
    <textarea v-model="nuevaTarea.solution" class="inp-area"></textarea>
  </div>

  <!--envía formulario-->
  <button @click="crearTarea" :disabled="!validarTarea">Enviar</button>
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
