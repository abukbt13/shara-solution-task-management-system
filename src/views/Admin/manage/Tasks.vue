<script setup>

import {useRoute} from "vue-router";

const  route = useRoute()
const id = route.params.id
const project_id = id
// alert(project_id)
import axios from "axios"
import {onMounted, ref} from "vue";
const tasks=ref([])
const users=ref([])
const spinner=ref(false)
const token=localStorage.getItem('token');
const headers = {
  'Authorization': `Bearer ${token}`,
};

const getTodo = async () =>{
  const res = await axios.get(`http://127.0.0.1:8000/api/show-tasks/${project_id}`,{headers})
  if(res.status===200){
    console.log(res)
    tasks.value=  res.data
  }
}
const getUsers= async () =>{
  const res = await axios.get('http://127.0.0.1:8000/api/usersNotAssignedTask/'+project_id,{headers})
 if(res.status===200){
   console.log(res)
    users.value=  res.data
  }
}
const task_id = ref('')
const task = ref('')
const user_id = ref('')
const time_line = ref('')
const date_line = ref('')
const description = ref('')
const task_type = ref('Assigned')

function startTimer() {
  spinner.value = true; // Set the spinner value to true
  setTimeout(() => {
    spinner.value = false; // Reset the spinner value to false after 1 second
  }, 1000);
}
function resetForm() {
  // alert()
  task_id.value=''
  task.value=''
  user_id.value=''
  time_line.value=''
  date_line.value=''
  description.value=''
}
const createTask = async () =>{
  const formData= new FormData()

  formData.append('task',task.value)
  formData.append('task_id',task_id.value)
  formData.append('user_id',user_id.value)
  formData.append('task_type',task_type.value)
  formData.append('date_line',date_line.value)
  formData.append('time_line',time_line.value)
  formData.append('description',description.value)

  if(task_id.value===''){
    const res = await axios.post(`http://127.0.0.1:8000/api/create_task/${project_id}`,formData,{headers})
    if(res.status===200){// Set the spinner value to true
      startTimer()
      getTodo()
      getUsers()
      resetForm()
    }
  }
  else{
    // alert(task_id.value)
    const res = await axios.post(`http://127.0.0.1:8000/api/create_update/${project_id}`,formData,{headers})
    if(res.status===200){
      startTimer()
      getTodo()
      getUsers()
      resetForm()

    }
  }

}
const deleteTask = async (project) => {
  const res = await axios.get(`http://127.0.0.1:8000/api/delete_user_task/${project}`,{headers})
  if(res.status===200){
    startTimer()
    getTodo()
    getUsers()
  }
}
const editTask = async (todo) =>{
  task_id.value=todo.id
  task.value=todo.todo
  user_id.value=todo.user_id
  task_type.value=todo.task_type
  date_line.value=todo.date
  time_line.value=todo.time
  description.value=todo.description
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
    <span @click="resetForm"> <i class="fa fa-plus"  aria-hidden="true"></i> Add Task</span>
  </button><br>
  <!-- Button trigger modal end -->

  <div  v-if="spinner" class="spinner-border w- text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="" v-else>

    <table class="table my-4 mx-4">
      <thead class="thead-dark">
      <tr>
        <th scope="col">User _id</th>
        <th scope="col">id</th>
        <th scope="col">Task Name</th>
        <th scope="col">Task Description</th>
        <th scope="col">dateline</th>
        <th colspan="2">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="todo in tasks" :key="todo">
        <td>{{ todo.user_id }}</td>
        <td>{{ todo.id }}</td>
        <td>{{ todo.todo }}</td>
        <td>{{ todo.description }}</td>
        <td>
          {{ todo.date }}Time{{todo.time }}
        </td>
        <td>
          <Button @click="editTask(todo)" data-bs-toggle="modal" data-bs-target="#addtask" class="btn btn-primary">Edit Task</Button>
          <Button @click="deleteTask(todo.id)" class="btn btn-danger ms-1">Delete Task</Button>
        </td>

      </tr>
      </tbody>

    </table>
  </div>



  <!-- Modal -->
  <div class="modal fade" id="addtask" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <p class="modal-title text-decoration-underline" id="exampleModalLabel">Add Task</p>
          <button type="button" class="btn-close btn-lg btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          
          <form @submit.prevent="createTask">
    <div class="mb-3">
        <label>Name{{task_id}}</label>
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
        <button style="border-radius: 0px; font-size: 22px;" type="submit" data-bs-dismiss="modal"  class="btn btn-success">Create</button>
    </div>
    </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spinner-border{
  position: absolute;
  top:9rem;
  left:21rem;
  width: 20rem;
  height: 20rem;
}
</style>