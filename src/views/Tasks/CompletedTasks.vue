<script setup>
import {taskData} from '@/composable/taskData'
const {completed_tasks}= taskData()
</script>

<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link to="/my-tasks/" class="nav-link" aria-current="page">Active</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/my-tasks/completed_tasks" class="nav-link active">Completed</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/my-tasks/trashed_tasks" class="nav-link">Trashed</router-link>
    </li>
  </ul>
  <table class="table table-borderless datatable">
          <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Task</th>
            <th scope="col">Date created</th>
            <th scope="col">Time created</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="task in completed_tasks" :key="task.id">
            <td>{{task.id}}</td>
            <td>{{task.todo}}</td>
            <td>{{task.date}}</td>
            <td>{{task.time}}</td>
          </tr>

          </tbody>
        </table>
</template>

<style scoped>

</style>