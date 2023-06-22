<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
const tasks = ref([])
const reviews = ref([])
const completed_tasks = ref([])
const active = ref(true)
const completedTasks = ref(true)
const token=localStorage.getItem('token');
const headers = {
  'Authorization': `Bearer ${token}`,
};
 function showActive(){
   alert('hey')
 }
const getuserTasks=async () =>{
  const res = await axios.get('http://127.0.0.1:8000/api/show_user_completed_tasks', {
    headers
  });
  if(res.status===200){
    completed_tasks.value=  res.data
  }
}
const get_Completed_UserTasks=async () =>{
  const res = await axios.get('http://127.0.0.1:8000/api/show_user_tasks', {
    headers
  });
  if(res.status===200){
    tasks.value=  res.data
  }
}

const deleteTask=async (id)=>{
  // alert(id)
  const response = await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}`);
  if(response.status===200){
    console.log(response.data)
    // getTodos()

  }
}

const todo = ref(null);
const todo_id = ref(null);
const task_type = ref('My Task');
const title = ref(null);
const error = ref(null);
const showSuccess=ref(false)

function edit_Todo(task){
  title.value='Edit Todo'
  todo.value=task.todo
  todo_id.value=task.id
}
const submitTodo = async (id) => {
  if(todo_id.value === null){

    if(todo.value === null || todo.value.trim() === ''){
      error.value = 'Todo cannot be empty';
    }
    else{
      const formData = new FormData();

      formData.append('todo', todo.value);
      formData.append('task_type', task_type.value);

      const res = await axios.post('http://127.0.0.1:8000/api/tasks', formData, { headers: headers });
      if (res.status === 200) {
        todo_id.value=null
        todo.value=null
      }
    }
  }
  else {
    if (todo.value === null || todo.value.trim() === '') {
      error.value = 'Todo cannot be empty';
    } else {


      const formData = new FormData();

      formData.append('todo', todo.value);

      const res = await axios.post(`http://127.0.0.1:8000/api/update-tasks/${todo_id.value}`, formData, {headers});
      if (res.status === 200) {
        todo_id.value = null
        todo.value = null
      }
    }
  }


}

const description = ref('')
const reviewerror = ref('')
const submitReview = async () => {

  if(description.value === null || description.value.trim() === ''){
    reviewerror.value = 'description cannot be empty ?';
  }
  else{
    // showSuccess.value = true
    const formData = new FormData();

    formData.append('description', description.value);


    const res = await axios.post('http://127.0.0.1:8000/api/addReview', formData, { headers });
    if (res.status === 200) {
      // getReviews();
      // review_id.value=null
      description.value=null

    }
  }

};
const truncatedLength = ref('10')
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

const getReviews = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/get-reviews',{headers});
  reviews.value = response.data
  console.log(response.data)
}
const  markComplete = async (id)=>{
  // alert(id)
  const res = await axios.get(`http://127.0.0.1:8000/api/mark_completed/${id}`,{
    headers
  });
  if(res.status==200) {
    alert('edited successfully')
  }
  else {
    alert('error in network')
  }
}
function viewReview(review){
  description.value=review.description
}
onMounted(() =>{
  getuserTasks()
  getReviews()
  get_Completed_UserTasks()
})
</script>

<template>

  <section class="section dashboard">
    <!--  modal for Task adding   -->
    <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header w-100">
            <p v-if="title" class="display-5" id="exampleModalLabel" style="font-weight: bold; width: 100%; text-align: center; color:#0000FF;">
              Edit Todo
            </p>
            <p v-else class="display-2" id="exampleModalLabel" style="font-weight: bold; width: 100%; text-align: center; color:#0000FF;">
              Add To Do
            </p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <label style="padding-left: 20px;">Enter your todo </label>
          <div class="modal-body">
            <textarea name="todo" v-model="todo" id="" cols="30" rows="3" class="form-control" placeholder="Enter the to do here ....."></textarea>
            <span class="text-danger" v-if="error">{{ error }}</span>
            <br>

            <div class="float-end" v-if="todo">
              <button v-if="title" type="button" @click="submitTodo(todo_id)" class="btn btn-secondary" data-bs-dismiss="modal">Add</button>
            </div>

            <div class="float-end" v-else="todo">
              <button v-if="title" type="button" @click="submitTodo(todo_id)" class="btn btn-secondary">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  modal for Task adding   -->
    <div class="row">

      <!-- Left side columns -->
      <div class="col-lg-8">
        <div class="row">
          <div class="col-12">
            <div class="card recent-sales overflow-auto">
              <div class="card-body">
                <h5 class="card-title">Tasks At Hand <span>| Today</span></h5>

                <table class="table table-borderless datatable">
                  <thead>
                  <tr>
                    <th scope="col">order</th>
                    <th scope="col">Tasks</th>
                    <th scope="col">Task Type</th>
                    <th scope="col">status</th>
                    <th scope="col">Action</th>
                </tr>
                  </thead>
                  <tbody v-show="active" style="display:none;">
                  <tr v-for="(task, index) in tasks" :key="task">
                    <td>{{index + 1}}</td>
                    <td>{{task.todo}}</td>
                    <td>{{task.task_type}}</td>

                    <td>
                      <i @click="edit_Todo(task)" data-bs-toggle="modal" data-bs-target="#add" class="fa fa-pencil" aria-hidden="true" style="font-size: 25px; color: blue;" title="Edit to do"></i>
                    </td>
                    <td>
                      <i class="fa fa-trash" @click="deleteTask(task.id)" aria-hidden="true" style="font-size: 25px; color: blue;" title="Delete"></i>
                      <i class="fa fa-check" @click="markComplete(task.id)" aria-hidden="true" style="font-size: 25px; color: blue;" title="Mark as completed"></i>
                    </td>

                  </tr>
                  </tbody>
                </table>

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
            <h5 class="card-title">My reviews <span>| Today</span></h5>
            <p data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <span><i class="fa fa-plus" aria-hidden="true"></i> </span>Add Review of your day <img src="assets/img/write.webp" width="54" height="57"></p>
            <div class="activity">
              <div data-bs-toggle="modal" @click="viewReview(review)"  data-bs-target="#staticBackdrop" class="activity-item d-flex" v-for="review in reviews" :key="review">
                <div  class="d-flex ">
                  <div class="activite-label">{{ review.date}}</div>
                  <i class='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                  <div class="activity-content">
                    {{ truncatedDescription(review.description) }} .. <span class="spanview_review" style="border-bottom: 1px black solid;">click to view</span>
                  </div>
                </div>

              </div>
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header border-0">
                      <h1 class="modal-title" id="staticBackdropLabel">Review Your Day</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="submitReview">
                      <label for="" class="ms-3">Description</label>
                      <div class="modal-body">
                        <textarea v-model="description" id="" cols="15" class="form-control" rows="10"></textarea>
                      </div>
                      <p class="ps-5 text-danger text-uppercase fw-bold">{{reviewerror}}</p>

                      <div class="modal-footer border-0">
                       <button type="submit" class="btn btn-success" data-bs-dismiss="modal" v-if="description">Create review</button>
                       <button type="submit" class="btn btn-outline-success"  v-else>Create review</button>


                      </div>
                    </form>

                  </div>
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
</template>

<style scoped>

</style>