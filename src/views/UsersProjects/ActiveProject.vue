<script setup>


import axios from "axios";
import {headers} from "@/composable/headers";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
const route = useRoute()
const project_id = ref('');
project_id.value=route.params.id
const user_projects_tasks = ref([]);
async function active_projects(project_id) {

  const response = await axios.get(`http://127.0.0.1:8000/api/projects/active_tasks/${project_id}`, { headers });
  if (response.status === 200) {
    user_projects_tasks.value = response.data;
  }
}
onMounted(() => {
  active_projects(project_id.value);
});
</script>

<template>
  <h2>Active tasks</h2>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link :to="`/project_in/active_project/${project_id}`" class="nav-link active" aria-current="page">Active</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="`/project_in/pending_projects/${project_id}`" class="nav-link">Pending</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="`/project_in/revision_projects/${project_id}`" class="nav-link">Revision</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="`/project_in/completed_projects/${project_id}`" class="nav-link">Completed</router-link>
    </li>
  </ul>

  <table class="table mt-2 table-bordered border-primary">
    <thead>
    <tr>
      <th scope="col">Project ID</th>
      <th scope="col">ID</th>
      <th scope="col">Task Name</th>
      <th scope="col">Task Description</th>
      <th scope="col">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="task in user_projects_tasks" :key="task.id">
      <td>{{task.project_id}}</td>
      <td>{{task.id}}</td>
      <td>{{task.todo}}</td>
      <td>{{task.description}}</td>
      <td>
        <button @click="markComplete(task.id)" class="btn btn-primary"><i class="bi bi-check-lg"></i>Mark Complete</button>
      </td>

    </tr>

    </tbody>
  </table>

</template>

<style scoped>

</style>