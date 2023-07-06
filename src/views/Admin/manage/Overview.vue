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
    <div class="m-5 card w-50">

         <table >
           <tr >
              <td style="border: 1px solid pink;border-collapse: collapse;" colspan="2"> <h2 class="text-center">Project details</h2></td>
           </tr>
           <tr>
             <td style="border: 1px solid pink;border-collapse: collapse;">Project Name:</td>
             <td style="border: 1px solid pink;border-collapse: collapse;">Project Details</td>
           </tr>
           <tr class="">
             <td style="border: 1px solid pink;border-collapse: collapse;"> {{details.name}}</td>
             <td style="border: 1px solid pink;border-collapse: collapse;">{{details.description}}</td>
           </tr>
         </table>

    </div>
  </div>

</template>


