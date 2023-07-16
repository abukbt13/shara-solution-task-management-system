<script setup>
import {stageTask} from "@/composable/projects/stageTask";
const{revision_tasks,mark_Task_complete}=stageTask()
</script>

<template>
  <h2>Stage Tasks</h2>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link to="/stage-projects/" class="nav-link" aria-current="page" >Active</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/stage-projects/pending" class="nav-link" aria-current="page" >Pending</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/stage-projects/revision" class="nav-link active" aria-current="page" >Revision</router-link>
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
    </tr>
    </thead>
    <tbody>
    <tr v-for="revision in revision_tasks" :key="revision">
      <td>{{revision.user_id}}</td>
      <td>{{ revision.todo }}</td>
      <td>{{ revision.description }}</td>
      <td>
          <button @click="mark_Task_complete(revision.id)" class="btn btn-primary">
            <i class="bi bi-check-lg"></i>
            Mark Completed
          </button>
    
      </td>
    </tr>

    </tbody>
  </table>

</template>

<style scoped>

</style>