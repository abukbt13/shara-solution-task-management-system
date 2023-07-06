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
  <ul class="nav nav-tabs">
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
         <table class="table my-3 table-bordered border-black">
           <thead>
           <tr>
             <th colspan="2"> <h2 class="text-center text-primary">Project details</h2></th>
           </tr>
           </thead>

          <tbody>
            <tr>
              <td class="text-center">Project Name:</td>
              <td class="text-primary">{{details.name}}</td>
            </tr>
            <tr>
              <td class="text-center">Project Description</td>
              <td class="text-primary">{{details.description}}</td>
            </tr>
          </tbody>
         </table>

    </div>

</template>


