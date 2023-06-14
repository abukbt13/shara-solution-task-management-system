
<template>
  <div class="modal fade" id="editUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-primary" id="exampleModalLabel">Update User</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h3 class="card-header">
            Edit User
          </h3>
          <Label>User Name</Label>
          <p>{{ username }}</p>
          <label for="">Email</label>
          <p>{{email}}</p>
          <label for="">Change Role</label>
          <div>
            <select v-model="selectedOption">
              <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
            </select>
            <p>You selected: {{ selectedOption }}</p>
          </div>


          <button type="button" @click="updateUser(user_id)" class="btn bg-primary btn-secondary float-end" data-bs-dismiss="modal">Save changes</button>


        </div>




      </div>
    </div>
  </div>
  <div class="modal fade" id="admin_add_user" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-primary">Add New user</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="card">
            <p>role{{role}}</p>
            <div class="card-body">
              <form @submit.prevent="saveUser">
                <div class="mb-3">
                  <label class="form-label">Username</label>
                  <input type="text" v-model="name" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">Email address</label>
                  <input type="email" v-model="email" class="form-control" >
                </div>
                <input type="text" hidden="" v-model="role" class="form-control">

                <button type="submit" class="btn btn-primary">Add</button>                          </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>