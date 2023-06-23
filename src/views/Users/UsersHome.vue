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
const weeklygoal = ref ('')
const Yearly_goal = ref ('')

const saveWeeklyGoal = async () =>{
  const formData = new FormData();

  formData.append('goal', weeklygoal.value);


  const res = await axios.post('http://127.0.0.1:8000/api/create_goal', formData, { headers });
  if (res.status === 200) {
     alert('success you created a goal')
  }
}
const vid_name = ref()
const youtube_link = ref()
const saveYoutubeDetails = async () =>{
  const formData = new FormData();

  formData.append('name', vid_name.value);
  formData.append('link', youtube_link.value);


  const res = await axios.post('http://127.0.0.1:8000/api/save_youtube_video', formData, { headers });
  if (res.status === 200) {
     alert('success you created a goal')
  }
}
const YearlyGoal = async () =>{
  const formData = new FormData();

  formData.append('goal', Yearly_goal.value);


  const res = await axios.post('http://127.0.0.1:8000/api/create_yearly_goal', formData, { headers });
  if (res.status === 200) {
     alert('success you created a goal')
  }
}

const randomWeekGoals = ref('');
const getRandomWeekGoals= async () =>{

    const response = await axios.get('http://127.0.0.1:8000/api/getRandomWeekGoal');
    if (response.status === 200) {
      randomWeekGoals.value = response.data;
    }
}
const year_gooals = ref('');
const getRandomyearGoals= async () =>{

    const response = await axios.get('http://127.0.0.1:8000/api/getRandomYearGoal');
    if (response.status === 200) {
      year_gooals.value = response.data;
    }
}
onMounted(() =>{
  getRandomWeekGoals()
  getRandomyearGoals()
  getuserTasks()
  getReviews()
  get_Completed_UserTasks()
})
</script>

<template>

  <section class="section dashboard">
    <!--             Add Google docs modal here-->
    <div class="modal fade" id="google_docs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-body">
            <p class="border-bottom">Document details</p>

            <label class="text-uppercase" for="">Document Name</label>
            <input type="text" v-model="doc_name" class="form-control">
            <label class="text-uppercase" for="">Document Link</label>
            <input type="text" v-model="google_link" class="form-control" placeholder="Type your goal here .....">
            <span class="text-danger" v-if="error">{{ error }}</span>
            <div class="mt-1 float-end">

              <button  v-if="title"  type="button" @click="submitGoogleDoc" class="btn btn-secondary">Save link</button>

              <button v-else  type="button" @click="submitGoogleDoc" class="btn btn-secondary" data-bs-dismiss="modal">Save link</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--         End of   Google docs Video-->
    <!--             Add Local docs modal here-->
    <div class="modal fade" id="local_docs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-body">
            <p class="border-bottom">Upload Document here</p>
            <label class="text-uppercase" for="">Document Name</label>
            <input type="text" v-model="doc_name" class="form-control">
            <label class="text-uppercase" for="">Enter Link</label>
            <input  type="file"  class="form-control" placeholder="Type your goal here .....">
            <span class="text-danger" v-if="error">{{ error }}</span>
            <div class="mt-1 float-end">

              <button  v-if="title"  type="button" @click="savelocalDocument" class="btn btn-secondary">Save link</button>

              <button v-else  type="button" @click="savelocalDocument" class="btn btn-secondary" data-bs-dismiss="modal">Upload Document</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--         End of   Local docs Video-->
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
            <textarea name="todo" v-model="todo" id="" cols="20" rows="3" class="form-control" placeholder="Enter the to do here ....."></textarea>
            <span class="text-danger" v-if="error">{{ error }}</span>
            <br>


            <div class="float-end">

              <button  v-if="title"  type="button" @click="submitTodo(todo_id)" class="btn btn-secondary">Add</button>

              <button v-else  type="button" @click="submitTodo(todo_id)" class="btn btn-secondary" data-bs-dismiss="modal">Add</button>
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
            <p style="position: sticky;" class="pb-0 fw-bold text-lg-center border-bottom-1 border-black">Tasks At Hand <span>| Today</span></p>

            <div style="overflow: scroll; min-height: 20rem;max-height: 21rem" class="card-body border-top-4">

                <table class="table  datatable">

                  <tr>
                    <th class="border-1">#</th>
                    <th class="border-1">Tasks</th>
                    <th class="border-1">Task_Type</th>
                    <th class="border-1" colspan="3">Action</th>
                </tr>
                  <tbody v-show="active" style="display:none;">
                  <tr v-for="(task, index) in tasks" :key="task">
                    <td  class="border-1">{{index + 1}}</td>
                    <td  class="border-1">{{task.todo}}</td>
                    <td  class="border-1">{{task.task_type}}</td>

                    <td  class="border-1">
                      <i @click="edit_Todo(task)" data-bs-toggle="modal" data-bs-target="#add" class="fa fa-pencil" aria-hidden="true" style="font-size: 25px; color: blue;" title="Edit to do"></i>
                    </td>
                    <td  class="border-1">
                      <i class="fa fa-trash" @click="deleteTask(task.id)" aria-hidden="true" style="font-size: 25px; color: blue;" title="Delete"></i>
                    </td>
                    <td>
                      <i class="fa fa-check" @click="markComplete(task.id)" aria-hidden="true" style="font-size: 25px; color: blue;" title="Mark as completed"></i>
                    </td>

                  </tr>
                  </tbody>
                </table>

              </div>

          </div>
        <div class="">
          <p class="text-center border-bottom border-primary text-primary text-uppercase">My goals that Keep me going</p>
          <div class="row">

            <div  class="col">
                <div class="d-flex justify-content-between">
                  <p class="p-2">Weekly Goals</p>
                  <button data-bs-toggle="modal" data-bs-target="#weekly_goals" class="float-end" style="color: white;  background: blue;border-radius: 7px; height: 2rem; border: 1px solid">add goal</button>
                </div>
              <p>
                {{randomWeekGoals.goal}}
              </p>
<!--                  Modal for adding weekly goals  -->
              <div class="modal fade" id="weekly_goals" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">

                    <div class="modal-body">
                      <form @submit.prevent="saveWeeklyGoal">
                      <label class="text-uppercase" for="">Create Weekly Goal here</label>
                      <textarea name="todo" v-model="weeklygoal" id="" cols="20" rows="3" class="form-control" placeholder="Type your goal here ....."></textarea>
                      <span class="text-danger" v-if="error">{{ error }}</span>


                      <div class="mt-1 float-end">

                        <button   type="submit" class="btn btn-secondary">Add Goal</button>

<!--                        <button v-else  type="submit" @click="submitTodo(todo_id)" class="btn btn-secondary" data-bs-dismiss="modal">Add Goal</button>-->
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <!--                End  Modal for adding weekly goals  -->

            </div>
            <div  class="col">
                <div class="d-flex justify-content-between">
                  <p class="p-2">Yearly Goals</p>
                  <button data-bs-toggle="modal" data-bs-target="#weekly_goals" class="float-end" style="color: white;  background: blue;border-radius: 7px; height: 2rem; border: 1px solid">add goal</button>
                </div>
              <p>
                {{year_gooals.goal}}
              </p>
              <!--             Yearly modal here-->
              <div class="modal fade" id="yearly_goals" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">

                    <div class="modal-body">
                      <form @submit.prevent="YearlyGoal">

                        <label class="text-uppercase" for="">Create Yearly Goal here</label>
                        <textarea v-model="Yearly_goal" id="" cols="20" rows="3" class="form-control" placeholder="Type your goal here ....."></textarea>
                        <span class="text-danger" v-if="error">{{ error }}</span>


                        <div class="mt-1 float-end">

                          <button    type="submit" class="btn btn-secondary">Add Goal</button>

                          <!--                        <button v-else  type="button"  class="btn btn-secondary" data-bs-dismiss="modal">Add Goal</button>-->
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <!--         End of    Yearly modal here-->

            </div>
          </div>
          <div class="row border-top">
            To customize, View and edit your goals click here <br>
            <a href="#">Settings</a>
          </div>
        </div>
        </div>
      </div>
      <!-- End Left side columns/ colum one -->

      <!-- Right side columns -->
      <div class="col-lg-4">

        <!-- Recent Activity -->
        <div class="card pb-0">
          <div class="filter" style="position: sticky;">
            <div class="icon float-end"  data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></div>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li class="dropdown-header text-start">
                <h6>Filter</h6>
              </li>

              <li><a class="dropdown-item" href="#">Today</a></li>
              <li><a class="dropdown-item" href="#">This Month</a></li>
              <li><a class="dropdown-item" href="#">This Year</a></li>
            </ul>
            <p class="card-title">My reviews <span>| Today</span></p>
          </div>

          <div style="min-height: 16rem;max-height: 19rem; overflow: scroll" class="card-body">
            <p style="background: #D980FA;" class="border sticky-top shadow" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <span><i class="fa fa-plus" aria-hidden="true"></i> </span>Add Review of your day</p>
            <div class="activity">
              <div data-bs-toggle="modal" @click="viewReview(review)"  data-bs-target="#staticBackdrop" class="activity-item d-flex" v-for="review in reviews" :key="review">
                <div  class="d-flex ">
                  <i class='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                  <div class="activity-content">
                    {{ truncatedDescription(review.description) }} <br>
                    <span class="spanview_review" style="border-bottom: 1px black solid;">click to view</span>
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
                       <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" v-if="description">Create review</button>
                       <button type="submit" class="btn btn-outline-primary"  v-else>Create review</button>


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
          <p>My favorite/learning Youtube videos <span><i data-bs-toggle="modal" data-bs-target="#youtube_video" class="fa fa-lg fa-plus"></i></span></p>

        <button class="btn btn-primary m-1">How to win </button>
        <button class="btn btn-primary m-1">How to win </button>
        <button class="btn btn-primary m-1">Scoring </button>
        <button class="btn btn-primary m-1">How to winow to winow to winow to win </button>
        <button class="btn btn-primary m-1">Influence </button>
        <!--             Add youtube Video modal here-->
        <div class="modal fade" id="youtube_video" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">

              <div class="modal-body">
                <form @submit.prevent="saveYoutubeDetails">
                  <p>You tube details</p>
                  <label class="text-uppercase" for="">Name </label>
                  <input type="text" class="form-control" v-model="vid_name" placeholder="Name of the viedeo">
                  <label class="text-uppercase" for="">youtube link</label>
                  <input name="todo" v-model="youtube_link"   class="form-control" placeholder="Enter link here .....">
                  <span class="text-danger" v-if="error">{{ error }}</span>

                  <div class="mt-1 float-end">

                    <button  type="submit"  class="btn btn-secondary">Add Goal</button>

<!--                    <button v-else  type="button"  class="btn btn-secondary" data-bs-dismiss="modal">Save Video</button>-->
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!--         End of   Add youtube Video-->
      </div>
      <!-- End Right side columns -->

    </div>
  </section>
</template>

<style scoped>

</style>