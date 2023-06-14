<script setup>
const role = localStorage.getItem('role')
</script>

<template>
  <p>Learning vue router </p>
  <div class="" v-if="role === 'user'">
    <router-link to="learn" class="btn btn-primary">Learn what users require</router-link>
  </div>
  <div class="" v-else-if="role === 'admin'">
    <router-link to="progress" class="btn ms-3 btn-primary">Learn in progress admin</router-link>

  </div>
  <div class="row">
    <div class="col">
      <p>This is my side bar</p>
    </div>
    <div class="col">

      <router-view></router-view>

    </div>
  </div>
</template>

<style scoped>

</style>