<script setup>
import {profileData} from '@/composable/profileData'
const {name,email,phone,address,photo}=profileData()



</script>
<template>
    <!-- <ul class="nav nav-tabs">
      <li class="nav-item">
      <router-link :to="`/profile/${id}`" class="nav-link " aria-current="page">Profile</router-link>
    </li>
  
  </ul> -->
        <div class="container mt-5">
    
          <div class="container">
    <div class="main-body">
  
          <div class="row gutters-sm">

            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img :src="'http://127.0.0.1:8000/'+photo" style="width:40%; height: 14rem;" class="rounded-circle">
                  </div>
                  <br/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{name}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{email}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {{phone}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {{address}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-12">
                      <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>
    
</div>
</template>
<style scoped>

</style>