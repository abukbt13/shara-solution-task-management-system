<script setup>


import {useRoute} from "vue-router";

const  route = useRoute()
const id = route.params.id
</script>

<template>
  <ul class="nav nav-pills">
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
  <div class="admins" >
    <div class="card-body">
      <button data-bs-toggle="modal" @click="assignRole('admin')" data-bs-target="#admin_add_user" class="button btn mt-2 btn-success"> <i class="fas fa-plus"></i> Add Admin</button>
      <table class="table table-bordered">
        <tr>
          <td colspan="6">Users in the Project</td>
        </tr>

        <tr>
          <th scope="col">ID</th>
          <th scope="col">User Names</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" colspan="2">Actions</th>
        </tr>
        <tbody>
        <tr>
          <th scope="row"><a href="#">#fdghjj</a></th>
          <td>vcbnm</td>
          <td>gfhbjnkml</td>
          <td>vgbhjkl</td>
          <td>
                   <span class="badge bg-success p-2" @click="editUser(admin.id)" data-bs-toggle="modal" data-bs-target="#editUser">
                   Edit Role</span>
          </td>
          <td><span class="badge bg-danger p-2" @click="updateUser">Delete</span></td>
        </tr>
        <tr>
          <th scope="row"><a href="#">#fdghjj</a></th>
          <td>vcbnm</td>
          <td>gfhbjnkml</td>
          <td>vgbhjkl</td>
          <td>
                   <span class="badge bg-success p-2" @click="editUser(admin.id)" data-bs-toggle="modal" data-bs-target="#editUser">
                   Edit Role</span>
          </td>
          <td><span class="badge bg-danger p-2" @click="updateUser">Delete</span></td>
        </tr>
        <tr>
          <th scope="row"><a href="#">#fdghjj</a></th>
          <td>vcbnm</td>
          <td>gfhbjnkml</td>
          <td>vgbhjkl</td>
          <td>
                   <span class="badge bg-success p-2" @click="editUser(admin.id)" data-bs-toggle="modal" data-bs-target="#editUser">
                   Edit Role</span>
          </td>
          <td><span class="badge bg-danger p-2" @click="updateUser">Delete</span></td>
        </tr>
        <tr>
          <th scope="row"><a href="#">#fdghjj</a></th>
          <td>vcbnm</td>
          <td>gfhbjnkml</td>
          <td>vgbhjkl</td>
          <td>
                   <span class="badge bg-success p-2" @click="editUser(admin.id)" data-bs-toggle="modal" data-bs-target="#editUser">
                   Edit Role</span>
          </td>
          <td><span class="badge bg-danger p-2" @click="updateUser">Delete</span></td>
        </tr>

        </tbody>
      </table>

      <!-- Modal -->
<!--      <div class="modal fade" id="editUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">-->
<!--        <div class="modal-dialog">-->
<!--          <div class="modal-content">-->
<!--            <div class="modal-header">-->
<!--              <h1 class="modal-title fs-5 text-primary" id="exampleModalLabel">Update User</h1>-->
<!--              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
<!--            </div>-->
<!--            <div class="modal-body">-->
<!--              <h3 class="card-header">-->
<!--                Edit User-->
<!--              </h3>-->
<!--              <Label>User Name</Label>-->
<!--              <p>{{ username }}</p>-->
<!--              <label for="">Email</label>-->
<!--              <p>{{email}}</p>-->
<!--              <label for="">Change Role</label>-->
<!--              <div>-->
<!--                <select v-model="selectedOption">-->
<!--                  <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>-->
<!--                </select>-->
<!--                <p>You selected: {{ selectedOption }}</p>-->
<!--              </div>-->
<!--              <button type="button" @click="updateUser(user_id)"  class="btn bg-primary btn-secondary float-end" data-bs-dismiss="modal">Save changes</button>-->
<!--            </div>-->

<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
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
<!--  </div>-->

</template>

<style scoped>

</style>