

<template>
<div class="register d-flex justify-content-center align-items-center">
        <div class="content w-25">
          <form @submit.prevent="submit">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Username</label>
              <input type="text" v-model="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
              <input type="password" v-model="c_password" class="form-control" id="exampleInputPassword1">
            </div>

            <button type="submit" class="btn btn-primary w-100">Register</button>
          </form>
          <br>
          <p>Dont have an account ? </p>
          <a href="/login" class="btn btn-success">click here</a>
        </div>
</div>
</template>
<script setup>

import {ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const router=useRouter()

const name=ref('')
const email=ref('')
const password=ref('')
const c_password=ref('')

const submit = async  () =>{
  const formData= new FormData()
  formData.append('name',name.value)
  formData.append('email',email.value)
  formData.append('password',password.value)
  formData.append('c_password',c_password.value)

  const res= await axios.post('http://127.0.0.1:8000/api/register',formData)
      .then(res => {
          localStorage.setItem('token',res.data.token)
        router.push('/')
      })
      .catch(err =>{
        console.log(err)
      })

}



</script>



<style scoped>
.register{
  height: 100vh;
}
</style>