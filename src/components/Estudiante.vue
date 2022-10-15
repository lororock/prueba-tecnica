<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { Tarea } from "../dto/tarea.dto";
import { TareaService } from "../services/tarea.services";
import { UserService } from "../services/user.service";
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore();

const nuevaTarea = reactive<Tarea>({
  description: "",
  name: "",
  professorId: "Seleccione Profesor",
  solution: "",
  studentId: "",
});

const http = new TareaService();
const httpUsers = new UserService();

const profes = ref<any[]>([]);
const validarTarea = computed(() => {
  if (
    !nuevaTarea.description ||
    !nuevaTarea.name ||
    !nuevaTarea.professorId ||
    !nuevaTarea.solution
  )
    return false;
  return true;
});

const crearTarea = async () => {
  try {
    await http.crearTarea(
      { ...nuevaTarea, studentId: authStore.idUser || "" },
      authStore.token || ""
    );
    nuevaTarea.description = "";
    nuevaTarea.name = "";
    nuevaTarea.professorId = "";
    nuevaTarea.solution = "";

    alert("Tarea enviada");
  } catch (error) {
    alert("Algo salio mal");
  }
};

onMounted(async () => {
  authStore.reloadUserData();
  profes.value = await httpUsers.listarUsuarios(authStore.token || "");
});
</script>

<template>
  <div>
    <!--imprime nombre del estudiante-->
    <h1></h1>
    <!--inicio de formulario-->
    <select v-model="nuevaTarea.professorId">
      <option selected disabled>Seleccione Profesor</option>
      <option v-for="profe in profes" :key="profe.username" :value="profe._id">
        {{ profe.name }}
      </option>
    </select>
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
