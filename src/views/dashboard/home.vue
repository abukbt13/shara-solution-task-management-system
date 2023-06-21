<script setup>
import todomodule from "@/modules/Dashboard/todomodule";
import AdminHome from "@/views/SuperAdmin/AdminHome.vue";
import Project from "@/views/Admin/Project.vue";
const role = localStorage.getItem('role')
let{ alert,getTodos,showSuccess,clearFields,submitTodo,deleteTask,tasks,todo,edit_Todo,todo_id,error}= todomodule

</script>

<template>

<!-- End Page Title -->
  <div class="" v-if="role === 'user'">
    <section class="section dashboard">
        <div class="row">

      <!-- Left side columns -->
      <div class="col-lg-8">
        <div class="row">
          <div class="col-12">
            <div class="card recent-sales overflow-auto">
                <div class="card-body">
                <h5 class="card-title">Recent Sales <span>| Today</span></h5>

<!--                <table class="table table-borderless datatable">-->
<!--                  <thead>-->
<!--                  <tr>-->
<!--                    <th scope="col">#</th>-->
<!--                     <th scope="col">Tasks</th>-->
<!--                     <th scope="col">status</th>-->
<!--                    <th style="width: 4rem;" scope="col " class="" colspan="3" >Actions</th>-->
<!--                  </tr>-->
<!--                  </thead>-->
<!--                  <tbody>-->
<!--                  <tr v-for="task in tasks" :key="task">-->
<!--                    <td scope="row"><a href="#">{{task.id}}</a></td>-->
<!--                    <td>{{task.todo}}</td>-->

<!--                    <td v-if="task.status === 'active'">Pending</td>-->
<!--                    <td v-else>Completed</td>-->
<!--                    <td>-->
<!--                      <i @click="edit_Todo(task.id)" data-bs-toggle="modal" data-bs-target="#add" class="fa fa-pencil" aria-hidden="true" style="font-size: 25px; color: blue;" title="Edit to do"></i>-->
<!--                    </td>-->
<!--                    <td>-->
<!--                      <i class="fa fa-trash" @click="deleteTask(task.id)" aria-hidden="true" style="font-size: 25px; color: blue;" title="Delete"></i>-->
<!--                    </td>-->

<!--                    <td  v-if="task.status === 'active'">-->
<!--                      <i class="fa fa-check" @click="markComplete(task.id)" aria-hidden="true" style="font-size: 25px; color: blue;" title="Mark as completed"></i>-->
<!--                    </td>-->
<!--                    <td v-else>-->
<!--                      <i class="fa fa-check-double"  aria-hidden="true" style="font-size: 25px; color: blue;" title="Mark as completed"></i>-->
<!--                    </td>-->
<!--                  </tr>-->
<!--                  </tbody>-->
<!--                </table>-->

              </div>

            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h4 class="text-center">MY Goals</h4>
            </div>
            <div class="row">
              <div class="col">
                <p class="text-center">weekly Goals</p>
                <ul>
                  <button class="btn btn-primary">Welcome</button>
                  <li>random goal here</li>
                </ul>
              </div>
              <div class="col">
                <p class="text-center">Yearly Goals</p>
                <ul>
                  <li>Land a job</li>
                </ul>
              </div>
            </div>
            <!-- End Recent Sales -->
        </div>
      </div>
      </div>
      <!-- End Left side columns/ colum one -->

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
            <h5 class="card-title">Recent Activity <span>| Today</span></h5>

            <div class="activity">

              <div class="activity-item d-flex">
                <div class="activite-label">32 min</div>
                <i class='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                <div class="activity-content">
                  Quia quae rerum <a href="#" class="fw-bold text-dark">explicabo officiis</a> beatae
                </div>
              </div>
              <!-- End activity item-->

            </div>

          </div>
        </div>
        <!-- End Recent Activity -->


      </div><!-- End Right side columns -->

    </div>
    </section>
  </div>

  <div class="" v-else-if="role === 'super_admin'">
     <AdminHome />
  </div>
  <div class="" v-else>
    <Project />
  </div>
</template>

<style scoped>

</style>