<script setup>

</script>

<template>
  <!--  <section class="section dashboard">-->
  <div class="row" v-if="role === 'user'">
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
  <div class="row" v-else-if="role==='super_admin'">

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

        <button data-bs-toggle="modal" @click="assignRole('user')" data-bs-target="#admin_add_user" class="button btn mt-2 btn-success"> <i class="fas fa-plus"></i> Add User</button>

        <!-- end Add user -->


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
        <button data-bs-toggle="modal" @click="assignRole('admin')" data-bs-target="#admin_add_user" class="button btn mt-2 btn-success"> <i class="fas fa-plus"></i> Add Admin</button>
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
          <tr v-for="admin in admins" :key="admin">
            <th scope="row"><a href="#">#{{admin.id}}</a></th>
            <td>{{admin.name}}</td>
            <td>{{admin.email}}</td>
            <td>{{admin.role}}</td>
            <td>
                   <span class="badge bg-success p-2" @click="editUser(admin.id)" data-bs-toggle="modal" data-bs-target="#editUser">
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
                    <input type="text" v-model="name" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" v-model="email" class="form-control" >
                  </div>
                  <input type="text" hidden="" v-model="role" class="form-control">

                  <button type="submit" class="btn btn-primary">Add</button>                          </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>
  <div class="row" v-else>
    <h2> sssss Admin</h2>
  </div>
  <!--  </section>-->
</template>

<style scoped>

</style>