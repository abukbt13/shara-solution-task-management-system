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
  <p>Completed</p>
</template>

<style scoped>

</style>