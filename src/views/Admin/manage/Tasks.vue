<script setup>

import {useRoute} from "vue-router";

const  route = useRoute()
const id = route.params.id
</script>

<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <router-link :to="`/overview/${id}`" class="nav-link" aria-current="page" >Overview</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="`/project_users/${id}`" class="nav-link" aria-current="page" >Users</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="`/tasks/${id}`" class="nav-link active" aria-current="page">Tasks</router-link>
    </li>
  </ul>
    <p>Tasks page</p>
</template>

<style scoped>

</style>