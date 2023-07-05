<script setup>
import {taskData} from '@/composable/taskData'
const {user_projects_tasks}= taskData()
</script>

<template>

  <h2>Projects</h2>
  <table class="table table-bordered">

    <tr>
      <th class="border-1">Id</th>
      <th class="border-1">Name</th>
      <th class="border-1">Description</th>
      <th class="border-1">Actions</th>
    </tr>
    <tbody>
      <tr v-for="task in user_projects_tasks" :key="task.id">
        <td>#{{task.project_id}}</td>
        <td>{{task.name}}</td>
        <td>{{task.description}}</td>
        <td>
          <router-link class="btn btn-sm bg-primary" :to="'/project_in/active_project/' + task.project_id">Manage</router-link>
        </td>
      </tr>

    </tbody>

  </table>

</template>

<style scoped>

</style>