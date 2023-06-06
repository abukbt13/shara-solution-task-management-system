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
        </a>
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>

            <i class="bi ms-2 bi-circle"></i> <span style="border-bottom: 2px solid grey;  text-transform:  uppercase;" data-bs-toggle="modal" data-bs-target="#exampleModal">
              show form
            </span>
         </li>



        </ul>
      </li><!-- End Components Nav -->

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

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-faq.html">
          <i class="bi bi-question-circle"></i>
          <span>F.A.Q</span>
        </a>
      </li><!-- End F.A.Q Page Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-contact.html">
          <i class="bi bi-envelope"></i>
          <span>Contact</span>
        </a>
      </li><!-- End Contact Page Nav -->

    </ul>

  </aside><!-- End Sidebar-->

  <main id="main" class="main">

    <!-- End Page Title -->

    <section class="section dashboard">
      <div class="row">

        <!-- Left side columns -->
        <div class="col-lg-8">
          <div class="row">
<!--##########################-->
            <!-- Button trigger modal -->


            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                   <form action="">
                    <textarea v-model="todo" class="form-control" id="" cols="30" rows="5"></textarea>
                    <button class="btn my-2 form-control btn-primary">Add Task</button>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
<!--            #################################################-->

            <div class="col-12">
              <h5  class="">Recent Tasks <span>| Today</span></h5>
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

                  <table class="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tasks</th>
                        <th scope="col">status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="task in tasks" :key="task">
                        <th scope="row"><a href="#">{{task.id}}</a></th>
                        <td>{{task.todo}}</td>
                        <td v-if="task.status === 'active'">Pending</td>
                        <td v-else>Completed</td>
                        <td v-if="task.status === 'active'">
                          <span class=""><button @click="markComplete(task.id)" class="btn btn-primary">mark Complete</button></span>
                        </td>
                        <td v-else>
                          <span class=""><button disabled class="btn btn-primary">mark Complete</button></span>
                        </td>
                      </tr>

                    </tbody>
                  </table>

                </div>

              </div>
            </div><!-- End Recent Sales -->
            <div class="card">
              <div class="card-header">
                <h4 class="text-center">MY Goals</h4>
              </div>
              <div class="row">
                <div class="col"><p class="text-center">weekly</p>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus. </li>
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
import reviewsmodule from "@/modules/reviews";
import {onMounted, ref} from "vue";
import Header from "@/views/includes/header.vue";
import Footer from "@/views/includes/Footer.vue";

  let{getTodos,tasks}=todomodules
let  {editreviews, reviews,editReview, markComplete, getReviews, show_single_review }=reviewsmodule
const truncatedLength = ref(10);

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
  getReviews()
  getTodos()
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