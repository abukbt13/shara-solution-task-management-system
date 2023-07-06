<script setup>

import {taskInProjects} from "@/composable/projects/taskInProjects";
const {user_projects_tasks,mark_complete }=taskInProjects()

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
        <button @click="mark_complete(task.id)" class="btn btn-primary"><i class="bi bi-check-lg"></i>Mark Complete</button>
      </td>

    </tr>

    </tbody>
  </table>

</template>

<style scoped>

</style>