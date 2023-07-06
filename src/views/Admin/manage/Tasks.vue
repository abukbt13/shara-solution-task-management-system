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
  const res = await axios.get('http://127.0.0.1:8000/api/usersNotAssignedTask/'+project_id,{headers})
 if(res.status===200){
    users.value=  res.data
  }
}
const task = ref('')
const user_id = ref('')
const time_line = ref('')
const date_line = ref('')
const description = ref('')
const task_type = ref('Assigned')

const createTask = async () =>{
  const formData= new FormData()
  formData.append('task',task.value)
  formData.append('user_id',user_id.value)
  formData.append('task_type',task_type.value)
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
  <ul class="nav nav-tabs">
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
      <th scope="col">User _id</th>
      <th scope="col">Task Name</th>
      <th scope="col">Task Description</th>
      <th scope="col">dateline</th>
      <th colspan="2">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="todo in tasks" :key="todo">
      <td>{{ todo.user_id }}</td>
      <td>{{ todo.todo }}</td>
      <td>{{ todo.description }}</td>
      <td>
        {{ todo.date }}Time{{todo.time }}
      </td>
      <td>
        <Button class="btn btn-success">MarkComplete</Button>
        <Button class="btn btn-primary">Revision</Button>
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
    <div class="mb-3">
        <label>Name</label>
        <input type="name" class="form-control" v-model="task">
    </div>  
    <div class="mb-3">
        <label for="">Add User</label><br>
        <select  v-model="user_id" class="form-select">
            <option v-for="user in users" :value="user.id" :key="user.id">{{ user.name }}</option>
        </select>
    </div>
        <label class="mb-3" for="">Deadline</label><br>
        <div class="mb-3">
          <div class="row">
          <div class="col">
            <div class="col-5">
              <div class="group">
              <label for="">Date</label><br>
              <input v-model="date_line" type="date" class="form-control">
          </div>
            </div>
            <div class="col-5">
              <div class="group">
            <label for="">Time</label><br>
            <input v-model="time_line"  type="time" class="form-control">
         </div>
            </div>
          </div>
        </div>
        </div>
     <div class="group mb-3">
        <label for="">Description</label><br>
        <textarea v-model="description"  rows="5" class="form-control"></textarea>
     </div>
     <div class="group mb-3">
        <button style="border-radius: 0px; font-size: 22px;" type="submit" class="btn btn-success">Create</button>
    </div>
    </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>