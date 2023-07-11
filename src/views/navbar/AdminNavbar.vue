<script setup>

</script>

<template>
  <li class="nav-item">
    <div class="nav-link " href="index.html">
      <i class="bi bi-grid"></i>
      <span>Dashboard</span>
    </div>
  </li>
  <li class="nav-item">
    <router-link to="/" class="nav-link ">
      <i class="bi bi-users"></i>
      <span>Projects</span>
    </router-link>
  </li>
  <li class="nav-item">
    <router-link to="/stage-projects" class="nav-link ">
      <i class="bi bi-users"></i>
      <span>Staged Projects</span>
    </router-link>
    <!-- End Dashboard Nav -->
  </li>
</template>

<style scoped>

</style>