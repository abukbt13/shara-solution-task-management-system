<script setup>
import todomodule from "@/modules/Dashboard/todomodule";
import SuperAdmin from "@/views/SuperAdmin/SuperAdmin.vue";
import AdminHome from "@/views/Admin/AdminHome.vue";
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
     <SuperAdmin />
  </div>
  <div class="" v-else>
    <AdminHome />
  </div>
</template>

<style scoped>

</style>