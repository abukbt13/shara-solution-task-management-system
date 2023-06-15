<script setup>
import {useRoute} from "vue-router";
import axios from "axios";
import {onMounted, ref} from "vue";
const token=localStorage.getItem('token');
const headers = {
  'Authorization': `Bearer ${token}`,
};

const  route = useRoute()
const id = route.params.id
const details = ref([])

const fetchOverview = async  () =>{
  const res = await axios.get(`http://127.0.0.1:8000/api/fetch_overview/${id}`, { headers: headers });

  if(res.status === 200){
    console.log(res)
    details.value = res.data
  }
}
onMounted(()=>{
  fetchOverview()
})
</script>

<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <router-link :to="`/overview/${id}`" class="nav-link active" aria-current="page" >Overview</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="`/project_users/${id}`" class="nav-link " aria-current="page" >Users</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="`/tasks/${id}`" class="nav-link " aria-current="page">Tasks</router-link>
    </li>
  </ul>
  <div>
    <div class="card w-50">
      <div class="card-header  text-center text-dark-emphasis text-primary">
        {{details.name}}
      </div>
      <div class="card-body">
        <p class="card-text text-center">
          {{details.description}}
        </p>
      </div>
    </div>
  </div>

</template>


