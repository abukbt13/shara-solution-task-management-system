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
    <router-link to="/project_in" class="nav-link " href="index.html">
      <i class="bi bi-table"></i>
      <span>Project</span>
    </router-link>
  </li>
  <li class="nav-item">
    <router-link to="/goal" class="nav-link " href="index.html">
      <i class="bi bi-list-task"></i>
      <span>Goals</span>
    </router-link>
  </li>
  <li class="nav-item">
    <router-link to="/document" class="nav-link ">
      <i class="bi bi-list-task"></i>
      <span>Documents</span>
    </router-link>
  </li>




   <div class="row">
     <span class="sticky-bottom"> Google Documents  </span>
     <div class="d-flex" style="min-height: 3rem;max-height: 9rem; overflow: auto;">
       <div class="" v-for="google_document in google_documents" :key="google_document">
         <a :href="google_document.doc_link" class="btn btn-primary m-1" target="_blank">{{ google_document.doc_name }}</a>
       </div>
     </div>

     <div style="min-height: 4rem;max-height: 11rem; overflow: auto;" class="div">
       <span class="sticky-bottom"> Local Documents  </span><br>
       <a  v-for="local_document in local_documents" :href="`http://127.0.0.1:8000/storage/Documents/${local_document.filename}`" target="_blank"  class="text-decoration-none btn btn-primary m-1">
         {{local_document.doc_name}}
       </a>
     </div>

   </div>

</template>

<style scoped>

</style>