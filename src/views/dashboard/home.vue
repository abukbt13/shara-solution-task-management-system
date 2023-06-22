<script setup>
import todomodule from "@/modules/Dashboard/todomodule";
import AdminHome from "@/views/SuperAdmin/AdminHome.vue";
import Project from "@/views/Admin/Project.vue";
import UsersHome from "@/views/Users/UsersHome.vue";
const role = localStorage.getItem('role')
let{ alert,getTodos,showSuccess,clearFields,submitTodo,deleteTask,tasks,todo,edit_Todo,todo_id,error}= todomodule

</script>

<template>

<!-- End Page Title -->
  <div class="" v-if="role === 'user'">
    <UsersHome />
  </div>

  <div class="" v-else-if="role === 'super_admin'">
     <AdminHome />
  </div>
  <div class="" v-else>
    <Project />
  </div>
</template>

<style scoped>

</style>