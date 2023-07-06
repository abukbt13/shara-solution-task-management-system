<template>
    <form @submit.prevent="createTask">
    <div class="mb-3">
        <label>Name</label>
        <input type="name" class="form-control" v-model="task">
    </div>  
    <div>
        <label for="">Add User</label><br>
        <select class="form-select">
            <option v-for="user in users" :value="user.id" :key="user.id">{{ user.name }}</option>
        </select>
    </div>
    <div class="group">
        <label for="">Deadline</label><br>
        <div class="group">
            <label for="">Date</label><br>
            <input v-model="date_line" type="date" class="form-control">
        </div>
       <div class="group">
            <label for="">Time</label><br>
            <input v-model="time_line"  type="time" class="form-control">
         </div>
     </div>
     <div class="group">
        <label for="">Description</label><br>
        <textarea v-model="description"  rows="5" class="form-control"></textarea>
     </div>
     <div class="group">
        <button style="border-radius: 0px; font-size: 22px;" type="submit" class="btn btn-success">Create</button>
    </div>
    </form>
    <form @submit.prevent="createTask">
            <div class="form d-flex">
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
</template>