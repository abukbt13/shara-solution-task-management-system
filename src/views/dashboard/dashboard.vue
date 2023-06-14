<template>


  <!-- Start of Header -->
      <Header />
  <!-- end of Header -->

  <!-- start of Sidebar -->

  <aside id="sidebar" class="sidebar">


    <ul class="sidebar-nav" id="sidebar-nav"  v-if="role==='user'">

      <li class="nav-item">
        <div class="nav-link " href="index.html">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </div>
      </li><!-- End Dashboard Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse">
          <i class="bi bi-menu-button-wide"></i><span>Tasks</span><i class="bi bi-chevron-down ms-auto"></i>

          <!--            #################################################-->
        </a>
        <ul>
          <li id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <span  @click="clearFields()" style="text-align:left; color: blue;" data-bs-toggle="modal" data-bs-target="#add">
              Add task
            </span>
          </li>
          <li id="components-nav" class="nav-content collapse " >
            <i class="fa fa-eye" aria-hidden="true"></i>
            <span   style="text-align:left; color: blue;">
             View tasks
            </span>
          </li>

        </ul>
      </li>

      <li class="nav-item" >
        <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-bar-chart"></i><span>weekly Goals</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li class="ms-4 pb-1">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <span class="text-decoration-underline">Add  goals</span>
          </li>
          <li class="ms-4">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <span class="text-decoration-underline">View Goals</span>
          </li>

        </ul>
      </li><!-- End Charts Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-gem"></i><span>Yearly Goals</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li class="ms-4 pt-2">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <span>Add Goal</span>
          </li>
          <li class="ms-4 pt-2">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <span>View goals</span>
          </li>

        </ul>
      </li><!-- End Icons Nav -->

      <li class="nav-heading">Pages</li>

      <li class="nav-item">
        <a class="nav-link collapsed" href="users-profile.html">
          <i class="bi bi-person"></i>
          <span>Profile</span>
        </a>
      </li><!-- End Profile Page Nav -->

    </ul>
    <ul class="sidebar-nav" id="sidebar-nav"  v-else="role==='super_admin'">
      <h2>Super_Admin</h2>
      <li class="nav-item">
        <div class="nav-link " href="index.html">
          <i class="bi bi-grid"></i>
          <span>Super admin Dashboard</span>
        </div>
      </li><!-- End Dashboard Nav -->


      <li class="nav-item" >
        <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Projects</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li class="ms-4 pb-1">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <span class="text-decoration-underline">Create Project</span>
          </li>
          <li class="ms-4">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <span class="text-decoration-underline">View Projects</span>
          </li>

        </ul>
      </li>
    </ul>
    <ul v-else>
      <li>Admin Zone</li>
    </ul>
  </aside>

  <!-- start of Sidebar -->

<!-- Start of Modal for adding and editing  to do-->
  <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header w-100">
          <h1 class="modal-title fs-5" id="exampleModalLabel" style="font-weight: bold; width: 100%; text-align: center; color:#0000FF;">Add To Do</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <label style="padding-left: 20px;">Enter your todo </label>
        <div class="modal-body">
            <textarea name="todo" v-model="todo" id="" cols="30" rows="3" class="form-control" placeholder="Enter the to do here ....."></textarea>
            <span class="text-danger" v-if="error">{{ error }}</span>
            <br>

              <div class="float-end" v-if="todo">
                <button type="button" @click="submitTodo(todo_id)" class="btn btn-secondary" data-bs-dismiss="modal">Add</button>
              </div>

                 <div class="float-end" v-else="todo">
                    <button type="button" @click="submitTodo(todo_id)" class="btn btn-secondary">Add</button>
                </div>
        </div>
      </div>
    </div>
  </div>

  <!-- End of Modal for adding and editing  to do-->

  <!--modal for adding review -->
  <div class="modal fade" id="addreview" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header w-100">
          <h1 class="modal-title fs-5" id="exampleModalLabel" style="font-weight: bold; width: 100%; text-align: center; color:#0000FF;">Add Review</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <label style="padding-left: 20px;">Enter your Review </label>
        <div class="modal-body">
            <textarea name="description" v-model="description" id="" cols="30" rows="3" class="form-control" placeholder="Enter the review here ....."></textarea>
            <!-- <span class="text-danger" v-if="error">{{ reviewerror }}</span> -->
            <br>
            <label class="text-danger">{{ reviewerror }}</label>
              <div class="float-end" v-if="description">
                <button type="button" @click="submitReview()" class="btn btn-secondary" data-bs-dismiss="modal">Add</button>
              </div>

                 <div class="float-end" v-else="description">
                    <button type="button" @click="submitReview()" class="btn btn-secondary">Add</button>
                </div>
        </div>
      </div>
    </div>
  </div>

   <!-- End of madal for adding review -->

  <main id="main" class="main">

    <!-- End Page Title -->

    <section class="section dashboard">
      <div class="row" v-if="role==='user'">
<!--Reviews Task showing starts here -->
        <div class="col-lg-8">
          <div class="row">
            <div class="col-12">
<!--            alert starts here-->
              <div v-show="showSuccess" class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Amazing progress!</strong> You have successfully added a task
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
<!--              alert ends here -->

              <h5  class="">Recent Tasks <span>| Today: {{currentDate}}</span>
              </h5>
              <div style="width: 100%;min-height: 17rem;max-height: 18rem;" class="card overflow-auto">
                  <table style="min-width: 100%;" class="table table-responsive table-border">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tasks</th>
                        <th scope="col">status</th>
                        <th style="width: 4rem;" scope="col " class="" colspan="3" >Actions</th>
                      </tr>

                      <tr v-for="task in tasks" :key="task">
                        <td scope="row"><a href="#">{{task.id}}</a></td>
                        <td>{{task.todo}}</td>

                        <td v-if="task.status === 'active'">Pending</td>
                        <td v-else>Completed</td>
                        <td>
                              <i @click="edit_Todo(task.id)" data-bs-toggle="modal" data-bs-target="#add" class="fa fa-pencil" aria-hidden="true" style="font-size: 25px; color: blue;" title="Edit to do"></i>
                        </td>
                        <td>
                          <i class="fa fa-trash" @click="deleteTask(task.id)" aria-hidden="true" style="font-size: 25px; color: blue;" title="Delete"></i>
                        </td>

                        <td  v-if="task.status === 'active'">
                          <i class="fa fa-check" @click="markComplete(task.id)" aria-hidden="true" style="font-size: 25px; color: blue;" title="Mark as completed"></i>
                        </td>
                        <td v-else>
                          <i class="fa fa-check-double"  aria-hidden="true" style="font-size: 25px; color: blue;" title="Mark as completed"></i>
                        </td>
                      </tr>

                  </table>

                </div>


            </div>
<!--        My goals     -->
            <div class="card" v-if="role==='user'">
              <div class="card-header">
                <h4 class="text-center">MY Goals</h4>
              </div>
              <div class="row">
                <div class="col">
                  <p class="text-center">weekly Goals</p>
                  <ul>
                    <li>{{ randomWeekGoals.goal }} </li>
                  </ul>
                </div>
                <div class="col">
                  <p class="text-center">Yearly Goals</p>
                  <ul>
                   <li>Land a job</li>
                  </ul>
                </div>
              </div>
           </div>
          </div>
        </div>
        <!--End of Reviews Task showing starts here -->


        <div class="col-lg-4">


          <!-- show reviews  -->
          <div class="card">
            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div class="card-body">
              
              <h3 style="color: #0E122B;" class="text-center  text-decoration-underline">Add Review  
                <span  @click="clearFields()" style="text-align:left; color: blue;" data-bs-toggle="modal" data-bs-target="#addreview">
                  <i class="fas fa-primary  fa-plus"></i></span> </h3>
  
              <h5
                  class="card-title">Recent Reviews <span>| Today</span>
              </h5>

              <div class="activity">
                <div data-bs-toggle="modal" @click="editReview(review.id)"  data-bs-target="#staticBackdrop" class="activity-item d-flex" v-for="review in reviews" :key="review">
                  <div  class="d-flex ">
                      <div class="activite-label">{{ review.date}}</div>
                      <i class='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                      <div class="activity-content">
                        {{ truncatedDescription(review.description) }} .. <span class="spanview_review" style="border-bottom: 1px black solid;">click to view</span>
                      </div>
                  </div>

                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="staticBackdropLabel">My review</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div class="" v-for="editreview in editreviews" :key="editreview">
                              {{editreview.description}}
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>


              </div>

            </div>
          </div>

          <!-- End show reviews -->



        </div>

      </div>
   <div class="row" v-if="role==='super_admin'">

     <ul class="nav nav-tabs">
       <li class="nav-item">
         <button ref="admins_btn" @click="populateAdmins" class="nav-link active bg-primary text-white">Admins</button>
       </li>
       <li class="nav-item">
         <button ref="users_btn" @click="populateUsers" class="nav-link" href="#">Users</button>
       </li>
     </ul>

          <div class="user" v-if="showUsers">
            <div class="card-body">
              <!-- Button trigger Add user -->

              <div data-bs-toggle="modal" data-bs-target="#admin_add_user" class="button btn mt-2 btn-success"> <i class="fas fa-plus"></i> Add User</div>

              <!-- end Add user -->

              <div class="modal fade" id="admin_add_user" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5 text-primary">Add New user</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="card">
                        <div class="card-body">
                          <form @submit.prevent="saveUser">
                            <div class="mb-3">
                              <label class="form-label">Username</label>
                              <input type="email" v-model="name" class="form-control" >
                            </div>
                            <div class="mb-3">
                              <label class="form-label">Email address</label>
                              <input type="email" v-model="email" class="form-control" >
                            </div>
                            <input type="text" hidden="" v-model="role" class="form-control" >
                            <input type="text" hidden v-model="role_id" class="form-control" >

                            <div class="mb-3">
                              <label for="exampleInputPassword1" class="form-label">Password</label>
                              <input type="password" v-model="password" class="form-control">
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                              <input type="password" v-model="c_password" class="form-control">
                            </div>
                            <button type="submit" class="btn btn-primary">Add</button>                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <table class="table table-borderless datatable">
                <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">User Names</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col" colspan="2">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users" :key="user">
                  <th scope="row"><a href="#">#{{user.id}}</a></th>
                  <td>{{user.name}}</td>
                  <td>{{user.email}}</td>
                  <td>{{user.role}}</td>
                  <td>
                   <span class="badge bg-success p-2" @click="editUser(user.id)" data-bs-toggle="modal" data-bs-target="#editUser">
                   Edit Role</span>
                  </td>
                  <td><span class="badge bg-danger p-2" @click="updateUser">Delete</span></td>
                </tr>

                </tbody>
              </table>

              <!-- Modal -->
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
            </div>
          </div>
          <div class="user" v-if="showAdmins">
            <div class="card-body">
              <div class="button btn mt-2  btn-success"><i class="fas fa-plus"></i>Add Admin</div>
              <table class="table table-borderless datatable">
                <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">User Names</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col" colspan="2">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users" :key="user">
                  <th scope="row"><a href="#">#{{user.id}}</a></th>
                  <td>{{user.name}}</td>
                  <td>{{user.email}}</td>
                  <td>{{user.role}}</td>
                  <td>
                   <span class="badge bg-success p-2" @click="editUser(user.id)" data-bs-toggle="modal" data-bs-target="#editUser">
                   Edit Role</span>
                  </td>
                  <td><span class="badge bg-danger p-2" @click="updateUser">Delete</span></td>
                </tr>

                </tbody>
              </table>

              <!-- Modal -->
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
            </div>
          </div>



      </div>
      <div class="row" v-else>
          <h2>Admin</h2>
      </div>
    </section>

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <Footer />
  <!-- End Footer -->


</template>
<script setup>
import todomodules from '@/modules/Dashboard/todomodule'
import weeklygoalmodule from '@/modules/Dashboard/weeklygoalmodule'
import dateupdates from '@/modules/Dashboard/dateupdate';
import todomodule from '@/modules/Dashboard/todomodule'
import reviewsmodule from "@/modules/reviews";
import {onMounted, ref} from "vue";
import Header from "@/views/includes/header.vue";
import Footer from "@/views/includes/Footer.vue";
import axios from "axios";
import {useRouter} from "vue-router";
import super_admin from "@/modules/data_for_roles/super_admin";
import userdetails from "@/modules/Dashboard/user";

const selectedOption = ref(null);
const options = [
  { label: 'user', value: 'user' },
  { label: 'admin', value: 'admin' },
  { label: 'super_admin', value: 'super_admin' }
];
const users_btn = ref(null)
const admins_btn = ref(null)
const showUsers = ref(false)
const showAdmins = ref(true)
function populateUsers () {
  users_btn.value.classList.add('bg-primary','text-white')
 admins_btn.value.classList.remove('bg-primary','text-white')
  admins_btn.value.classList.remove('active')
  showUsers.value = true
  showAdmins.value = false
}
function populateAdmins () {
  users_btn.value.classList.remove('bg-primary','text-white')
  admins_btn.value.classList.add('bg-primary','text-white')
  users_btn.value.classList.remove('active')
  showUsers.value = false
  showAdmins.value = true
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
const updateUser = async (id) =>{
  const formData = new FormData()
  formData.append('role', selectedOption.value);
  const res = await axios.post(`http://127.0.0.1:8000/api/users/update-user/${id}`, formData, {
    headers
  });
  // console.log(res)
  if(res.status===200){
    alert('success')
  }
}
// #######   Authenticate user
const authUser = async () => {
  const authHeader = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };

  try {
    const response = await axios.get('http://127.0.0.1:8000/api/user-auth', authHeader);
    console.log('okay');
  } catch (error) {
    // localStorage.removeItem('token');
    // Token is invalid or expired, logout the user
    window.location.href = '/login';
  }
};

// End of Auth user


let {getRandomWeekGoals, randomWeekGoals}=weeklygoalmodule
let {currentDate,updateCurrentDate}=dateupdates
let {users,editUser,username,email,user_id,getUsers}=super_admin


let{getTodos,tasks,showSuccess,clearFields,deleteTask,submitTodo,error,todo,edit_Todo,todo_id,}=todomodules
let  {editreviews, reviews,editReview, markComplete, getReviews, show_single_review,showReview,submitReview,description,reviewerror, review_id }=reviewsmodule
let {saveUser}=userdetails
const truncatedLength = ref(10);

const edit_id = ref('')
const edit_task=ref([]);

function editTask(id){

  edit_id.value=id
  // edit_id=id
  edit_task.value=tasks.value.filter(tasks=>tasks.id === id)
}
function truncatedDescription(description) {
  if (description.includes(reviews)) {
    return description;
  } else {
    const words = description.split(' ');
    if (words.length > truncatedLength.value) {
      return words.slice(0, truncatedLength.value).join(' ');
    } else {
      return description;
    }
  }
}

onMounted(()=>{
  authUser()
  getReviews()
  getTodos()
  getRandomWeekGoals()
  updateCurrentDate()
  getUsers()
  saveUser()
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