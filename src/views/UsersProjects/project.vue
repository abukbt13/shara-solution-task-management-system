<script setup>

import SuperAdminNavbar from "@/views/navbar/SuperAdminNavbar.vue";
import AdminNavbar from "@/views/navbar/AdminNavbar.vue";
import Header from "@/views/includes/header.vue";
import UsersNavbar from "@/views/navbar/UsersNavbar.vue";
import Footer from "@/views/includes/Footer.vue";
</script>
<template>

  <!-- Start of Header -->
  <Header />
  <!-- end of Header -->

  <!-- start of Sidebar -->


  <aside id="sidebar" ref="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">
      <UsersNavbar />
    </ul>
  </aside>


  <!--    Start of main-->
  <main id="main" class="main">

    <router-view></router-view>

  </main>
  <!-- End #main -->

  <!-- ======= Footer ======= -->
  <div  class="">
    <Footer />
  </div>

</template>