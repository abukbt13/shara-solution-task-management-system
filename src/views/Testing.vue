<template>
  <div class="upload d-flex flex-column align-items-center">
    <div class="form">
      <h2>Upload company Details here</h2>
      <form @submit.prevent="submit">
        <div class="form-group my-2">
          <label for="">Company name</label>
          <input type="text" class="form-control" v-model="company_name"  placeholder="Enter The Company">
        </div>
        <div class="form-group my-2">
          <label for="">Picture</label>
          <input type="file" class="form-control"  @change="onFileChange"   placeholder="Enter The Company">
        </div>

        <button type="submit" class="btn btn-primary my-2 px-4">Save Company Details</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import {ref} from "vue";
const company_name=ref('')
const company_logo=ref('')
const user=ref('')
user.value=localStorage.getItem('username')


const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
const onFileChange=(e)=>{
  company_logo.value=e.target.files[0];
}
const submit=async () => {
  const formData = new FormData();
  formData.append('company_name', company_name.value);
  formData.append('company_logo', company_logo.value);

  const res = await api.post('company', formData);
  if (res.status == 200) {
    console.log(company_logo)
    alert('success')
    // router.push('/dashboard')

  }

}
</script>

<style scoped>

</style>