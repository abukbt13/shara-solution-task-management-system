<script setup>

</script>

<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link to="/project_in" class="nav-link active" aria-current="page">Active</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/project_in/pending" class="nav-link">Pending</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/project_in/revision" class="nav-link">Revision</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/project_in/completed" class="nav-link">Completed</router-link>
    </li>
  </ul>
  <table class="table  datatable">

    <tr>
      <th class="border-1">#</th>
      <th class="border-1">Tasks</th>
      <th class="border-1">Task_Type</th>
      <th class="border-1" colspan="3">Action</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Go shoppping</td>
      <td>Assigned</td>
      <td>Manage</td>
      <td>Manage</td>
    </tr>
    <!--    <tbody v-show="active" style="display:none;">-->
    <!--    <tr v-for="(task, index) in tasks" :key="task">-->
    <!--      <td  class="border-1">{{index + 1}}</td>-->
    <!--      <td  class="border-1">{{task.todo}}</td>-->
    <!--      <td  class="border-1">{{task.task_type}}</td>-->

    <!--      <td  class="border-1">-->
    <!--        <i @click="edit_Todo(task)" data-bs-toggle="modal" data-bs-target="#add" class="fa fa-pencil" aria-hidden="true" style="font-size: 25px; color: blue;" title="Edit to do"></i>-->
    <!--      </td>-->
    <!--      <td  class="border-1">-->
    <!--        <i class="fa fa-trash" @click="deleteTask(task.id)" aria-hidden="true" style="font-size: 25px; color: blue;" title="Delete"></i>-->
    <!--      </td>-->
    <!--      <td>-->
    <!--        <i class="fa fa-check" @click="markComplete(task.id)" aria-hidden="true" style="font-size: 25px; color: blue;" title="Mark as completed"></i>-->
    <!--      </td>-->

    <!--    </tr>-->
    <!--    </tbody>-->
  </table>
</template>

<style scoped>

</style>