<script setup>
import {taskData} from '@/composable/taskData'
const {completed_tasks,deleteTask}= taskData()
</script>

<template>
  <h2>Completed Tasks</h2>
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
  <table class="table mt-2 table-bordered border-primary">
          <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Task Name</th>
            <th scope="col">Task Description</th>
            <th scope="col">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="task in completed_tasks" :key="task.id">
            <td>{{task.id}}</td>
            <td>{{task.todo}}</td>
            <td>{{task.description}}</td>
            <td>
              <button @click="deleteTask(task.id)" class="btn btn-danger"><i class="bi bi-trash"></i>Delete</button>
            </td>
          </tr>

          </tbody>
        </table>
</template>

<style scoped>

</style>