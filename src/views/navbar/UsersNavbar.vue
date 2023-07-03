<script setup>
import {documentData,} from "@/composable/documentData";
const {google_documents,local_documents}=documentData()

import {taskData} from "@/composable/taskData"
const {clearTask}=taskData()
</script>

<template>

  <li class="nav-item">
    <router-link to="/" class="nav-link">
      <i class="bi bi-house-add-fill"></i>
      <span>Home</span>
    </router-link>
  </li><!-- End Dashboard Nav -->
  <li class="nav-item">
    <router-link to="/my-tasks" class="nav-link " href="index.html">
      <i class="bi bi-list-task"></i>
      <span>Tasks</span>
    </router-link>
  </li>
  <li class="nav-item">
    <router-link to="/My_projects" class="nav-link " href="index.html">
      <i class="bi bi-table"></i>
      <span>Project</span>
    </router-link>
  </li>
  <li class="nav-item">
    <router-link to="/goals" class="nav-link " href="index.html">
      <i class="bi bi-list-task"></i>
      <span>Goals</span>
    </router-link>
  </li>
  <li class="nav-item">
    <router-link to="/document" class="nav-link " href="index.html">
      <i class="bi bi-list-task"></i>
      <span>Documents</span>
    </router-link>
  </li>





    <div class="row">
      <p class="sticky-bottom">Google Documents <span><i data-bs-toggle="modal" data-bs-target="#google_docs" class="fa fa-lg fa-plus"></i></span> </p>
      <div style="min-height: 8rem;max-height: 9rem; overflow: auto;" class="div">


        <button class="btn btn-primary m-1" v-for="google_document in google_documents" :key="google_document" >{{google_document.doc_name}}</button>


      </div>

      <div style="min-height: 10rem;max-height: 11rem; overflow: auto;" class="div">
        <p class="sticky-bottom">Local  Documents <span><i data-bs-toggle="modal" data-bs-target="#local_docs" class="fa fa-lg fa-plus"></i></span> </p>

        <button class="btn btn-primary m-1" v-for="local_document in local_documents" :key="local_document" >{{local_document.doc_name}}</button>

      </div>

    </div>

  <!-- End Profile Page Nav -->

</template>

<style scoped>

</style>