<script setup>
import SuperAdminNavbar from "@/views/navbar/SuperAdminNavbar.vue";
import AdminNavbar from "@/views/navbar/AdminNavbar.vue";
import UsersNavbar from "@/views/navbar/UsersNavbar.vue";
</script>

<template>
  <aside id="sidebar" ref="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav"  v-if="role==='user'">
      <UsersNavbar />
    </ul>

    <ul class="sidebar-nav" id="sidebar-nav"  v-else-if="role==='super_admin'">
      <SuperAdminNavbar />
    </ul>
    <ul v-else class="sidebar-nav" id="sidebar-nav">
      <AdminNavbar />
    </ul>
  </aside>
</template>

<style scoped>

</style>