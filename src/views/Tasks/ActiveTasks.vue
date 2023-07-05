<script setup>
import {taskData} from '@/composable/taskData'
const {tasks,deleteTask,markComplete}= taskData()


function confirmAndMarkComplete(taskId) {
  if (confirm("Are you sure you want to mark this task as complete?")) {
    markComplete(taskId);
  } else {
    // User cancelled the action, do nothing or provide feedback
  }
}

function confirmDelete(taskId) {
  if (confirm("Are you sure you want to mark this task as complete?")) {
    deleteTask(taskId);
  } else {
    // User cancelled the action, do nothing or provide feedback
  }
}
</script>

<template>
  <h2>Active Tasks</h2>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link to="/my-tasks/" class="nav-link active" aria-current="page">Active</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/my-tasks/completed_tasks" class="nav-link">Completed</router-link>
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
            <th scope="col" colspan="2">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{task.id}}</td>
            <td>{{task.todo}}</td>
            <td>{{task.description}}</td>
            <td>
              <button @click="confirmAndMarkComplete(task.id)" class="btn btn-primary">
                <i class="bi bi-check-lg"></i> Mark Complete
              </button>
            </td>

            <td>
              <button @click="confirmDelete(task.id)" class="btn btn-danger"><i class="bi bi-trash"></i>Delete</button>
            </td>
          </tr>

          </tbody>
        </table>
</template>

<style scoped>

</style>