<script setup>
import Footer from "@/views/includes/Footer.vue"
import {documentData,} from "@/composable/documentData";
const {google_documents,local_documents}=documentData()

</script>
<template>
  <div class="row">
    <div class="col">
      <h2 class="text-center">Local Documents</h2>
      <button data-bs-toggle="modal" data-bs-target="#local_docs"  class="btn btn-primary">
        <span>
          <i class="fa fa-lg fa-plus"></i>
        </span>
        Upload document
      </button>
        <br>
      <button class="btn btn-primary m-1" v-for="local_document in local_documents" :key="local_document" >{{local_document.doc_name}}</button>

    </div>
    <div class="col">
      <h2 class="text-center">Internet documents and links</h2>
      <button data-bs-toggle="modal" data-bs-target="#google_docs" class="btn btn-primary">
        <span>
          <i  class="fa fa-lg fa-plus"></i>        </span>
        Save new Link
      </button>
    <br>
      <button class="btn btn-primary m-1" v-for="google_document in google_documents" :key="google_document" >{{google_document.doc_name}}</button>


    </div>
  </div>
    
<br>

    <!--             Add Google docs modal here-->
    <div class="modal fade" id="google_docs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-body">
            <form @submit.prevent="saveGoogleDocument">
              <p class="border-bottom">Upload google Document </p>

              <label class="text-uppercase" for="">Document Name</label>
              <input type="text" v-model="google_name" class="form-control">
              <label class="text-uppercase" for="">Document Link</label>
              <input type="text" v-model="google_link" class="form-control" placeholder="Type your goal here .....">
              <label class="text-uppercase" for="">Document Description</label>
              <input type="text" v-model="google_description" class="form-control" placeholder="Type your goal here .....">
              <span class="text-danger" v-if="error">{{ error }}</span>
              <div class="mt-1 float-end">
                <button  type="submit"  class="btn btn-secondary">Save link</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--         End of   Google docs Video-->
    <!--             Add Local docs modal here-->
    <div class="modal fade" id="local_docs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-body">
            <form @submit.prevent="saveLocalDocument">
              <p class="border-bottom">Upload local Document</p>
              <label class="text-uppercase" for="">Document Name</label>
              <input type="text" v-model="doc_name" class="form-control">
              <label class="text-uppercase"  for="">Description </label>
              <textarea v-model="doc_description" class="form-control" cols="10" rows="5"></textarea>
              <label class="text-uppercase"  for="">Upload file </label>
              <input type="file" class="form-control"  @change="onFileChange"   placeholder="Enter The Company">              <div class="mt-1 float-end">

                <button    type="submit"  class="btn btn-secondary">Save link</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--         End of   Local docs Video-->
      <Footer />
    </template>
    <style scoped> 
  
  
  </style>