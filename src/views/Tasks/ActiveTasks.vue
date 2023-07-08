<script setup>
import {taskData} from '@/composable/taskData'
const {tasks,deleteTask,error,submitTodo,todo_name,todo,markComplete,task_description}= taskData()


function confirmAndMarkComplete(taskId) {
  if (confirm("Are you sure you want to mark this task as complete?")) {
    markComplete(taskId);
  } else {
    // User cancelled the action, do nothing or provide feedback
  }
}

function confirmDelete(taskId) {
  if (confirm("Are you sure you want to mark this task as complete?")) {
    deleteTask(taskId);
  } else {
    // User cancelled the action, do nothing or provide feedback
  }
}
</script>

<template>
  <h2>Active Tasks</h2>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link to="/my-tasks/" class="nav-link active" aria-current="page">Active</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/my-tasks/completed_tasks" class="nav-link">Completed</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/my-tasks/trashed_tasks" class="nav-link">Trashed</router-link>
    </li>

  </ul>
  <button class="btn btn-primary">
    <span @click="clearTask"  data-bs-toggle="modal" data-bs-target="#add">
       Add task
    </span>
  </button>
  <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="mx-2 my-2 d-flex justify-content-between">
          <h3 v-if="title" class="text-center">
            Edit Todo
          </h3>
          <h3 v-else class="text-center">
            Create To Do
          </h3>
          <button type="button" class="btn-close btn-lg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <label for="">To do Name</label>
          <input type="text" class="form-control" v-model="todo_name">
          <label class="text-bg">To do Description</label>
          <textarea name="todo" v-model="todo" id="" cols="20" rows="3" class="form-control" placeholder="Type your  to do here ....."></textarea>
          <span class="text-danger" v-if="error">{{ error }}</span>
          <br>


          <div class="float-end">

            <div  v-if="todo_name"   @click="submitTodo(todo_id)" data-bs-dismiss="modal">
              <span class="btn btn-primary" v-if="title">Update</span>
              <span class="btn btn-primary" v-else >Save Todo</span>
            </div>
            <div v-else @click="submitTodo(todo_id)">
              <span class="btn btn-primary" v-if="title">Update</span>
              <span class="btn btn-primary" v-else >Save Todo</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <table class="table mt-2 table-bordered border-primary">
          <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Task Name</th>
            <th scope="col">Task Description</th>
            <th scope="col" colspan="2">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{task.id}}</td>
            <td>{{task.todo}}</td>
            <td>{{task.description}}</td>
            <td>
              <button @click="confirmAndMarkComplete(task.id)" class="btn btn-primary">
                <i class="bi bi-check-lg"></i> Mark Complete
              </button>
            </td>

            <td>
              <button @click="confirmDelete(task.id)" class="btn btn-danger"><i class="bi bi-trash"></i>Delete</button>
            </td>
          </tr>

          </tbody>
        </table>
</template>

<style scoped>

</style>