<script setup>


import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios";

const token=localStorage.getItem('token');
const headers = {
  'Authorization': `Bearer ${token}`,
};
const  route = useRoute()
const id = route.params.id
const project_id = id
const users = ref([])
const projectusers = ref([])

const list_users_not_in_project = async () =>{
  const response= await axios.get(`http://127.0.0.1:8000/api/list_users_not_in_project/${project_id}`,{ headers: headers })
  if(response.status === 200)
  {
    users.value=response.data
  }
}
const removeUser = async (id) =>{
  alert(id)
  const response= await axios.get(`http://127.0.0.1:8000/api/remove_user_in_project/${id}`,{ headers: headers })
  if(response.status === 200)
  {
    fetchProjectUsers()
  }
}

const fetchProjectUsers = async () =>{
  const response= await axios.get(`http://127.0.0.1:8000/api/fetch_users_to_the_current_project/${project_id}`,{ headers: headers })
  if(response.status === 200)
  {
    projectusers.value=response.data
    // console.log(projectusers)
  }
}

function add_user_to_project_users(user_id){
  const formData = new FormData()
  formData.append('user_id',user_id)
  formData.append('project_id',project_id)
  const response =  axios.post(`http://127.0.0.1:8000/api/add_user_to_the_current_project`,formData,{ headers: headers })
  if(response.status === 200)
  {

  }
}
onMounted(()=>{
  fetchProjectUsers()
  list_users_not_in_project()
})
</script>

<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link :to="`/overview/${id}`" class="nav-link" aria-current="page" >Overview</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="`/project_users/${id}`" class="nav-link active" aria-current="page" >Users</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="`/tasks/${id}`" class="nav-link " aria-current="page">Tasks</router-link>
    </li>
  </ul>
  <div v-show="showSuccess" class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Amazing progress!</strong> You have successfully added a task
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  <div class="admins">
    <div class="card-body">
      <button data-bs-toggle="modal" @click="list_users_not_in_project(project_id)" data-bs-target="#add_user" class="button btn mt-2 btn-primary">
        <i class="fas fa-plus"></i>
        Add user
      </button>
      <table class="table mt-2 table-bordered">
        <thead>
        <tr>
          <th colspan="6">Users in the Project</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="col">User Name</th>
          <th scope="col">Email</th>
          <th scope="col" colspan="2">Actions</th>
        </tr>
        <tr  v-if="projectusers && projectusers.length > 0" v-for="projectuser in projectusers" :key="projectuser">
          <td>{{projectuser.name}}</td>
          <td>{{projectuser.email}}</td>
          <td><span class="badge bg-danger p-2" @click="removeUser(projectuser.id)">Remove</span></td>
        </tr>
        <tr v-else class="no_user text-center">
          <td colspan="3" data-bs-toggle="modal" @click="list_users_not_in_project(project_id)" data-bs-target="#add_user">There is no user in the project <button class="btn btn-primary">Add user now</button></td>
        </tr>

        </tbody>

      </table>


      <div class="modal  fade" id="add_user" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-primary" id="exampleModalLabel">Click Add to add the user on the project</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <table class="table-primary table-bordered">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
                <tr v-for="user in users" :key="user">
                  <td>{{user.name}}</td>
                  <td>{{user.email}}</td>
                  <td>
                    <button class="btn btn-primary" data-bs-dismiss="modal" @click="add_user_to_project_users(user.id)">
                      Add User
                    </button>
                  </td>
                </tr>
              </table>
             </div>
        </div>
      </div>
    </div>
  </div>
<!--  <div class="modal fade" id="editUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">-->
<!--    <div class="modal-dialog">-->
<!--      <div class="modal-content">-->
<!--        <div class="modal-header">-->
<!--          <h1 class="modal-title fs-5 text-primary" id="exampleModalLabel">Update User</h1>-->
<!--          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
<!--        </div>-->
<!--        <div class="modal-body">-->
<!--          <h3 class="card-header">-->
<!--            Edit User-->
<!--          </h3>-->
<!--          <Label>User Name</Label>-->
<!--          <p>{{ username }}</p>-->
<!--          <label for="">Email</label>-->
<!--          <p>{{email}}</p>-->
<!--          <label for="">Change Role</label>-->
<!--          <div>-->
<!--            <select v-model="selectedOption">-->
<!--              <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>-->
<!--            </select>-->
<!--            <p>You selected: {{ selectedOption }}</p>-->
<!--          </div>-->


<!--          <button type="button" @click="updateUser(user_id)" class="btn bg-primary btn-secondary float-end" data-bs-dismiss="modal">Save changes</button>-->


<!--        </div>-->




<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="modal fade" id="admin_add_user" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">-->
<!--    <div class="modal-dialog">-->
<!--      <div class="modal-content">-->
<!--        <div class="modal-header">-->
<!--          <h1 class="modal-title fs-5 text-primary">Create A New Admin</h1>-->
<!--          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
<!--        </div>-->
<!--        <div class="modal-body">-->
<!--          <div class="card">-->
<!--            <div class="card-body">-->
<!--              <form @submit.prevent="saveUser">-->
<!--                <div class="mb-3">-->
<!--                  <label class="form-label">Username</label>-->
<!--                  <input type="text" v-model="name" class="form-control">-->
<!--                </div>-->
<!--                <div class="mb-3">-->
<!--                  <label class="form-label">Email address</label>-->
<!--                  <input type="email" v-model="email" class="form-control" >-->
<!--                </div>-->
<!--                <input type="text" hidden="" v-model="role" class="form-control">-->

<!--                <button type="submit" @click="alertSuccess"  data-bs-dismiss="modal" class="btn btn-primary">Add</button>                          </form>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>

</template>

<style scoped>

</style>