<script setup>

import {useRoute} from "vue-router";

const  route = useRoute()
const id = route.params.id
const project_id = id

import axios from "axios"
import {onMounted, ref} from "vue";
const tasks=ref([])
const users=ref([])
const token=localStorage.getItem('token');
const headers = {
  'Authorization': `Bearer ${token}`,
};

const getTodo = async () =>{
  const res = await axios.get(`http://127.0.0.1:8000/api/show-tasks/${project_id}`,{headers})
  if(res.status===200){
    tasks.value=  res.data
  }
}
const getUsers= async () =>{
  const res = await axios.get('http://127.0.0.1:8000/api/users_to_be_added_to_task',{headers})
  if(res.status===200){
    users.value=  res.data
  }
}
const task = ref('')
const user_id = ref('')
const time_line = ref('')
const date_line = ref('')
const description = ref('')

const createTask = async () =>{
  const formData= new FormData()
  formData.append('task',task.value)
  formData.append('user_id',user_id.value)
  formData.append('date_line',date_line.value)
  formData.append('time_line',time_line.value)
  formData.append('description',description.value)
  const res = await axios.post(`http://127.0.0.1:8000/api/create_task/${project_id}`,formData,{headers})
  if(res.status===200){
    getTodo()
    getUsers()
  }
}

onMounted(()=>{
  getTodo()
  getUsers()
})
</script>

<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <router-link :to="`/overview/${id}`" class="nav-link" aria-current="page" >Overview</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="`/project_users/${id}`" class="nav-link" aria-current="page" >Users</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="`/tasks/${id}`" class="nav-link active" aria-current="page">Tasks</router-link>
    </li>
  </ul>
  <!-- Button trigger modal -->
  <button type="button"  class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addtask">
    <span> <i class="fa fa-plus" aria-hidden="true"></i> Add Task</span>
  </button>
  <!-- Button trigger modal end -->
  <table class="table my-4 mx-4">
    <thead class="thead-dark">
    <tr>
      <th scope="col">Task Name</th>
      <th scope="col">Task Description</th>
      <th scope="col">dateline</th>
      <th colspan="2">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="todo in tasks" :key="todo">
      <td>{{ todo.todo }}</td>
      <td>{{ todo.description }}</td>
      <td>
        {{ todo.date }}Time{{todo.time }}
      </td>
      <td>
        <Button class="btn btn-success">MarkComplete</Button>
        <Button class="btn btn-primary">Edit</Button>
      </td>

    </tr>
    </tbody>
  </table>




  <!-- Modal -->
  <div class="modal fade" id="addtask" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <p class="modal-title" id="exampleModalLabel">Add Task</p>
          <button type="button" class="btn-close btn-lg btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createTask">
            <div class="form d-flex">
              <div class="group">
                <label for="">Task Name</label><br>
                <textarea  style="outline-color: #FDB0A0; width: 13rem; color: #2C3A47; " rows="1" cols="4" v-model="task"></textarea>
                <p class="text-danger text-lg-start">*required </p>
              </div>
              <div class="group ms-2">
                <label for="">Add User</label><br>
                <select v-model="user_id" style="outline-color: #FDB0A0; color: #2C3A47; width: 13rem; height: 2rem">
                  <option v-for="user in users" :value="user.id" :key="user.id">{{ user.name }}</option>
                </select>

              </div>
            </div>
            <div class="form p-2 d-flex">
              <div class="group">
                <label for="">Deadline</label><br>
              </div>
            </div>
            <div class="form p-2 d-flex">
              <div class="group">
                <label for="">Date</label><br>
                <input v-model="date_line" style="outline-color: #FDB0A0; color: #2C3A47; height: 2rem; width: 13rem;" type="date" name="" id="">
              </div>
              <div class="group">
                <label for="">Time</label><br>
                <input v-model="time_line" style="margin-left: 1rem; color: #2C3A47; height: 2rem; outline-color: #FDB0A0; width: 13rem;" type="time" name="" id="">
              </div>
            </div>
            <div class="form p-2 d-flex">
              <div class="group">
                <label for="">Description</label><br>
                <textarea v-model="description" style="border-radius:0px; color: #6C1705;color: #2C3A47; outline-color: #FDB0A0;" id="" cols="41" rows="5"></textarea>
                  <p class="text-danger text-lg-start">*required </p>
              </div>
            </div>
            <div class="form p-2 d-flex">
            <div class="group">
             <button style="border-radius: 0px; font-size: 22px;" type="submit" class="btn btn-success">Create</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>