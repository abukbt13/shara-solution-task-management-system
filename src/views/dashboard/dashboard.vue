<template>


  <!-- Start of Header -->
      <Header />
  <!-- Start of Header -->

  <!-- start of Sidebar -->

  <aside id="sidebar" class="sidebar">


    <ul class="sidebar-nav" id="sidebar-nav"  v-if="role==='super_admin'">

      <li class="nav-item">
        <div class="nav-link " href="index.html">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </div>
      </li><!-- End Dashboard Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="">
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
    <ul v-else="role==='user'">


      <li class="nav-item" style="list-style: none;">
        <div class="nav-link " href="index.html">
          <i class="bi bi-grid" style="color: #0d6efd"></i>
          <span style="color: #0a53be">Dashboard</span>
        </div>
      </li>
      <li style="list-style: none;" class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="">
          <i class="bi bi-menu-button-wide" style="color: #0d6efd" ></i><span style="color: #0a53be">Tasks</span><i class="bi bi-chevron-down ms-auto"></i>

          <!--            #################################################-->
        </a>
        <ul style="list-style: none;">
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
      </li >
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
            <span class="text-danger" v-if="error">{{ error }}</span>
            <br>

              <div class="float-end" v-if="description">
                <button type="button" @click="submitReview(review_id)" class="btn btn-secondary" data-bs-dismiss="modal">Add</button>
              </div>

                 <div class="float-end" v-else="description">
                    <button type="button" @click="submitReview(review_id)" class="btn btn-secondary">Add</button>
                </div>
        </div>
      </div>
    </div>
  </div>

   <!-- End of madal for adding review -->

  <main id="main" class="main">

    <!-- End Page Title -->

    <section class="section dashboard">
      <div class="row">
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

const role=localStorage.getItem('role')
const router= useRouter()
const token=localStorage.getItem('token');
if(!token){
    window.location.href = '/login';
}
const auth = {
  'Authorization': `Bearer ${token}`,
};
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


let{getTodos,tasks,showSuccess,clearFields,deleteTask,submitTodo,error,todo,edit_Todo,todo_id,}=todomodules
let  {editreviews, reviews,editReview, markComplete, getReviews, show_single_review,showReview,submitReview, review_id }=reviewsmodule
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