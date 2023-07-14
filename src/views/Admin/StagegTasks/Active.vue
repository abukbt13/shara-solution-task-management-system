<script setup>
import {stageTask} from "@/composable/projects/stageTask";
const{active_tasks}=stageTask()
</script>

<template>
  <h2>Stage Tasks</h2>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link to="/stage-projects/" class="nav-link active" aria-current="page" >Active</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/stage-projects/pending" class="nav-link" aria-current="page" >Pending</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/stage-projects/revision" class="nav-link" aria-current="page" >Revision</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/stage-projects/completed" class="nav-link" aria-current="page" >Completed</router-link>
    </li>


  </ul>
  <table class="table mt-2 table-bordered border-primary">
    <thead>
    <tr>
      <th scope="col">User Id</th>
      <th scope="col">Task Name</th>
      <th scope="col">Task Description</th>
      <th scope="col" colspan="2">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="active in active_tasks" :key="active">
      <td>{{active.user_id}}</td>
      <td>{{ active.todo }}</td>
      <td>{{ active.description }}</td>
      <td>
        <button class="btn btn-primary">
          <i class="bi bi-check-lg"></i> Drop Task
        </button>
      </td>
    </tr>

    </tbody>
  </table>

</template>

<style scoped>

</style>