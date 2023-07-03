<script setup>

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
  <p>Completed tasks here</p>

</template>

<style scoped>

</style>