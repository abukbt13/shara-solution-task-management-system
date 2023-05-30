<template>
    
 
    <div class="row d-flex mt-5 justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Sign in</h3>

            <form @submit.prevent="submit">
            <div class="form-outline mb-4">
              <label class="form-label" for="typeEmailX-2">Email</label>
              <input v-model="email" type="email" id="typeEmailX-2" class="form-control form-control-lg" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="typePasswordX-2">Password</label>
              <input v-model="password" type="password" id="typePasswordX-2" class="form-control form-control-lg" />
            </div>

            <!-- Checkbox -->
            <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button type="submit" class="btn btn-primary btn-lg btn-block">Login</button>
            <div>
                <p class="mb-0">Don't have an account? <a href="/register" >Sign Up</a>
              </p>

            </div>
            </form>
            

          </div>
        </div>
      </div>
    </div>


</template>
<script setup>

import {ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const router=useRouter()

const email=ref('')
const password=ref('')
const submit = async  () => {
  const formData = new FormData()
  formData.append('email', email.value)
  formData.append('password', password.value)

  const res = await axios.post('http://127.0.0.1:8000/api/login', formData)
  if(res.status==200){
    if (!res.data.status === 'success') {
     alert('invalid details')
    }else {
      localStorage.setItem('token', res.data.token)
      router.push('/')
    }
  }

}
</script>