<template>


  <!-- ======= Header ======= -->
<Header />

  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <a class="nav-link " href="index.html">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li><!-- End Dashboard Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="">
          <i class="bi bi-menu-button-wide"></i><span>Tasks</span><i class="bi bi-chevron-down ms-auto"></i>

          <!--            #################################################-->
        </a>
        <ul>
          <li id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <span  style="text-align:left; color: blue;" data-bs-toggle="modal" data-bs-target="#add">
              Add task
            </span>
         </li>
          <li id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <!-- Modal -->
         </li>

        </ul>
      </li>




      <!-- End Components Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-journal-text"></i><span>Forms</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="forms-elements.html">
              <i class="bi bi-circle"></i><span>Form Elements</span>
            </a>
          </li>
          <li>
            <a href="forms-layouts.html">
              <i class="bi bi-circle"></i><span>Form Layouts</span>
            </a>
          </li>
          <li>
            <a href="forms-editors.html">
              <i class="bi bi-circle"></i><span>Form Editors</span>
            </a>
          </li>
          <li>
            <a href="forms-validation.html">
              <i class="bi bi-circle"></i><span>Form Validation</span>
            </a>
          </li>
        </ul>
      </li><!-- End Forms Nav -->


      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-bar-chart"></i><span>weekly Goals</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="charts-chartjs.html">
              <i class="bi bi-circle"></i><span>Add  goals</span>
            </a>
          </li>
          <li>
            <a href="charts-apexcharts.html">
              <i class="bi bi-circle"></i><span>View Goals</span>
            </a>
          </li>

        </ul>
      </li><!-- End Charts Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-gem"></i><span>Yearly Goals</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="icons-bootstrap.html">
              <i class="bi bi-circle"></i><span>Add Goal</span>
            </a>
          </li>
          <li>
            <a href="icons-remix.html">
              <i class="bi bi-circle"></i><span>View goals</span>
            </a>
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

  </aside>
<!--  Modaal for adding to do-->
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

  <!-- End modal for adding to do-->

  <main id="main" class="main">

    <!-- End Page Title -->

    <section class="section dashboard">
      <div class="row">

        <!-- Left side columns -->
        <div class="col-lg-8">
          <div class="row">
            <div class="col-12">
<!--            alert starts here-->
              <div v-show="showSuccess" class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You have successfully added a task
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
<!--              alert ends here -->

              <h5  class="">Recent Tasks <span>| Today: {{currentDate}}</span></h5>
              <hr>
              <div style="min-height: 12rem;max-height: 16rem;" class="card recent-sales overflow-auto">

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

                  <table class="table table-border datatable">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tasks</th>
                        <th scope="col">status</th>
                        <th style="width: 4rem;" scope="col " class="" colspan="3" >Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="task in tasks" :key="task">
                        <th scope="row"><a href="#">{{task.id}}</a></th>
                        <td>{{task.todo}}</td>
          
                        <td v-if="task.status === 'active'">Pending</td>
                        <td v-else>Completed</td>

                        <td>


                          <!-- Button trigger modal -->

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

                    </tbody>
                  </table>

                </div>

              </div>
            </div>
            <!-- Button trigger modal -->
         <!-- End Recent Sales -->
            <div class="card">
              <div class="card-header">
                <h4 class="text-center">MY Goals</h4>
              </div>
              <div class="row">
                <div class="col"><p class="text-center">weekly</p>
                  <ul>
                    <li>{{ randomWeekGoals.goal }} </li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus. </li>
                  </ul>
                </div><div class="col"><p class="text-center">weekly</p>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus. </li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus. </li>
                  </ul>
                </div>
              </div>
           </div>
          </div>
        </div><!-- End Left side columns -->

        <!-- Right side columns -->
        <div class="col-lg-4">

          <!-- Recent Activity -->
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
              <h5 class="card-title">Recent Reviews <span>| Today</span></h5>

              <div class="activity">
                <!-- Button trigger modal -->


                <!-- Modal -->

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
          </div><!-- End Recent Activity -->



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
    localStorage.removeItem('token');
    // Token is invalid or expired, logout the user
    window.location.href = '/login';
  }
};

// End of Auth user


let {getRandomWeekGoals, randomWeekGoals}=weeklygoalmodule
let {currentDate,updateCurrentDate}=dateupdates



let{getTodos,tasks,showSuccess,deleteTask,submitTodo,error,todo,edit_Todo,todo_id}=todomodules
let  {editreviews, reviews,editReview, markComplete, getReviews, show_single_review }=reviewsmodule
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