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
<div class="modal fade" id="editProfile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-primary" id="exampleModalLabel">Update User</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="updateUser(user_id)">
        <div class="modal-body">
          <h3 class="card-header">
            Edit User 8888
          </h3>
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input type="text" v-model="name" class="form-control">
          </div>
          <div class="mb-3">
            <label class="form-label">Phone</label>
            <input type="text" v-model="phone" class="form-control">
          </div>
          <div class="mb-3">
            <label class="form-label">Address</label>
            <input type="text" v-model="address" class="form-control">
          </div>
          <button type="submit"  class="btn bg-primary btn-secondary float-end" data-bs-dismiss="modal">Save changes</button>
        </div>

      </form>


      </div>
    </div>
  </div>
</template>
<style scoped>

</style>