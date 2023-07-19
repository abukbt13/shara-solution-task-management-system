
<template>


  <!-- Start of Header -->
      <Header />
  <!-- end of Header -->

  <!-- start of Sidebar -->

  <aside id="sidebar" ref="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav"  v-if="role==='user'">
      <UsersNavbar />
    </ul>

    <ul class="sidebar-nav" id="sidebar-nav"  v-else-if="role==='super_admin'">
      <SuperAdminNavbar />
    </ul>
    <ul v-else class="sidebar-nav" id="sidebar-nav">
     <AdminNavbar />
    </ul>
  </aside>


<!--    Start of main-->
  <main id="main" class="main">

    <router-view></router-view>

  </main>
  <!-- End #main -->

  <!-- ======= Footer ======= -->

    <Footer />

  <!-- End Footer -->

</template>
<script setup>
import todomodules from '@/modules/Dashboard/todomodule'
import weeklygoalmodule from '@/modules/Dashboard/weeklygoalmodule'
import dateupdates from '@/modules/Dashboard/dateupdate';
import reviewsmodule from "@/modules/reviews";
import {onMounted, ref} from "vue";
import Header from "@/views/includes/header.vue";
import Footer from "@/views/includes/Footer.vue";
import axios from "axios";
import {useRouter} from "vue-router";
import user from "@/modules/superadmin/user";
const sidebar = ref()
function showSidebar (){
  sidebar.style.display ='block'
}



const role=localStorage.getItem('role')
const router= useRouter()
const token=localStorage.getItem('token');
if(!token){
    window.location.href = '/login';
}
const auth = {
  'Authorization': `Bearer ${token}`,
};
const headers = {
  'Authorization': `Bearer ${token}`,
}

// #######   Authenticate user
const authUser = async () => {
  const authHeader = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };

  try {
    const response = await axios.get('http://127.0.0.1:8000/api/user-auth', authHeader);
    console.log(response);
    //alert('success')
  } catch (error) {
    // localStorage.removeItem('token');
    // localStorage.removeItem('id');
    // localStorage.removeItem('role');
    // Token is invalid or expired, logout the user
    window.location.href = '/login';
  }
};

// End of Auth user


let {getRandomWeekGoals, randomWeekGoals}=weeklygoalmodule
let {currentDate,updateCurrentDate}=dateupdates
let {users,editUser,getAdmins,admins,username,email,user_id,name,assignRole,saveUser,getUsers}=user


let{tasks,showSuccess,clearFields,deleteTask,submitTodo,error,todo,edit_Todo,todo_id,}=todomodules
let  {editreviews, reviews,editReview, markComplete, getReviews, show_single_review,showReview,submitReview,description,reviewerror, review_id }=reviewsmodule


import UsersNavbar from "@/views/navbar/UsersNavbar.vue";
import AdminNavbar from "@/views/navbar/AdminNavbar.vue";
import SuperAdmin from "@/views/navbar/SuperAdminNavbar.vue";
import SuperAdminNavbar from "@/views/navbar/SuperAdminNavbar.vue";

onMounted(()=>{
  authUser()
  getReviews()
  getRandomWeekGoals()
  updateCurrentDate()
  getUsers()
  saveUser()
  getAdmins()
})

</script>
<style>
.addTask{

  width: 40rem;
  height: 28rem;
  position: absolute;
  top: 25%;
  left: -100%;
}

</style>