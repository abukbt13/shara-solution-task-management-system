<template>

  <div class="container mt-1">
    <!-- <span class="date text-decoration-underline">{{ currentDate }}</span> -->
   <h2 class="text-center text-decoration-underline text-primary">My daily planning {{ currentDate }}</h2>
        <p style="color: #4A76A1;" class="text-center text-decoration-underline">Good morning {{userName}}</p>

        <div class="main d-flex ">

          <div class="tasks w-50 justify-content-center d-flex flex-column align-items-center">
            <h3 style="color: #0E122B;" class="text-center  text-decoration-underline">Todays Tasks  <span @mouseover="showAddbtn"><i class="fas fa-primary  fa-plus"></i></span> </h3>

            <div class="today">

            <div class="card-body">

              <table class="table  mb-8">
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Todo</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in tasks" :key="item">
                  <td>
                    {{item.id }}
                  </td>
                  <td>
                    {{item.todo }}
                  </td>
                  <td>
                    {{item.status }}
                  </td>
                  <td>
                    <i class="fas   fa-pencil-alt"  @click="editTask(item.id)" style="font-size: 25px; color: blue;"></i>
                  &nbsp;
                    <i class="fas fa-trash-alt" @click="deleteItem(item.id)" style="color:red; font-size: 20px; "></i>
                  </td>
                </tr>

              </tbody>
            </table>

            </div>
        </div>

              <div class="weeklytheme">
                <h5 style="text-align: center;">Weekly Goals</h5>
                <ul style="list-style: disc;">
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                  {{ randomWeekGoals.goal }}
                  <i class="fa fa-quote-right" aria-hidden="true"></i>
                </ul>

              </div>
              <div class="yearlytheme">
                <h5 class="text-center">Theme of the year</h5>
                <ol class="theme">
                  <li>To be a whole rounded perse rounded perse rounded person</li>
                  <li>To be a whole rounded perse rounded perse rounded person</li>
                  <li>To be a whole rounded perse rounded perse rounded person</li>
                </ol>
              </div>
          </div>

          <div class="ms-3 reviews">
            <div  style="background: aliceblue;height: 15rem;overflow: scroll;"  class="get-review">
              <h2 style="color: #0E122B;" class="text-align-left text-decoration-underline">Recent Reviews</h2>
              <ul style="list-style: none;" v-for="review in reviews" :key="review">
               <li @click="editReview(review.id)" style="background: aliceblue; margin: 1rem" class="mt-2">
                 {{review.date}}
                 <button style="border: none; border-bottom: solid blue;" @click="review.id">View</button>
               </li>
              </ul>
            </div>

            <div class="review">
              <div class="" v-for="editreview in editreviews" :key="editreview">
                {{editreview.description}}

              <textarea class="form-control" rows="5" cols="30">
 {{editreview.description}}

              </textarea>
              </div>
            </div>

             <div class="ms-4 add-review">
              <p>How was your day</p>
              <textarea v-model="review" name="review" class="form-control" id="review" cols="30" rows="3" placeholder="describe your experience or say something concerning this "></textarea>
             <button @click="addReview" type="submit" class="mt-3 w-50 btn btn-sm btn-secondary">add review</button>
            </div>

          </div>

        </div>
</div>

  <div class="add-todo" v-show="addtodo">
    <div class="content">

      <i @click="close" class="close fas fa-close"></i>
      <form @submit.prevent="submit">
        <h2 class="mt-4 mb-2 text-center">Enter todo</h2>
        <textarea name="todo" v-model="todo" id="" cols="30" rows="3" class="form-control" placeholder="Enter the to do here ....."></textarea>
        <br>
        <button type="submit" class="btn btn-primary w-100">Add to do</button>

      </form>
       </div>
  </div>

  <div class="add-todo" v-show="editsignleTask">
    <div class="content">
      <i @click="closeedittask" class="close fas fa-close"></i>
      <form @submit.prevent="updateTask">
        <h2 class="mt-4 mb-2 text-center">Edit the todo</h2>
        <textarea name="todo" v-model="etodo" id="" cols="30" rows="3" class="form-control" >  {{etodo}}</textarea>
        <br>
        <button type="submit" class="btn btn-primary w-100">Update Task</button>

      </form>
    </div>
  </div>

</template>

<script setup>
// @ is an alias to /src
import {onMounted, ref} from "vue";
import axios from "axios";

import {useRouter} from "vue-router";
import {filter} from "core-js/internals/array-iteration";
const addtodo=ref(false)
const router= useRouter()
const jobs=ref('')
const token=localStorage.getItem('token');
if(!token){
  // router.push('/login')
}
// alert(token)
import modules from './../modules/modules'
 let {getReviews,reviews,editreviews,exact_review,editReview,show_single_review} =modules

function closeedittask(){
  editsignleTask.value=false
}

const editsignleTask=ref(false)

const taskstoedit=ref([]);

const editedId = ref(null);
const editTask = async (id) => {

  editsignleTask.value=true
  editedId.value = id;
  const res = await axios.get(`http://127.0.0.1:8000/api/edit-tasks/${id}`,  {
    headers: headers
  });
  if(res.status==200) {
    taskstoedit.value = res.data
    etodo.value=res.data.todo
    // console.log(taskstoedit.value)
  }

  }
  const message1=ref('')
const etodo=ref('');
  const updateTask = async () => {

    const formData = new FormData();
    formData.append('etodo', etodo.value);
    const res = await axios.post(`http://127.0.0.1:8000/api/update-tasks/${editedId.value}`, formData);
    if (res.status == 200) {
      message1.value=res.data
        console.log(res.data)

      alert('task edited successfully')
      // window.location.reload()
      getTodos()

      editsignleTask.value=false
    }
  }
  
function showAddbtn(){
  addtodo.value=true
}
function close(){
      addtodo.value=false
}
const todo=ref('')
const headers = {
  'Authorization': `Bearer ${token}`,
};
const submit=async ()=> {
  console.log(todo)
  const formData = new FormData();
  formData.append('todo', todo.value);
  const res = await axios.post('http://127.0.0.1:8000/api/tasks', formData, {
    headers: headers
  });
  if(res.status==200){
    getTodos()
    addtodo.value=false
  }
}
const review=ref('');
const addReview=async ()=>{
  console.log(review)
  const formData=new FormData();
  formData.append('description', review.value);
  const response=await axios.post('http://127.0.0.1:8000/api/addReview', formData,{
    headers:headers
  });
  if(response.status==200){
      window.location.reload();
    }
}
const authUser = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/user', {
      headers: headers
    });
  } catch (error) {
    if (error.response.status === 401) {
      router.push('/login');
    }
  }
};
authUser()
const tasks=ref([])

const getTodos=async () =>{

  const res = await axios.get('http://127.0.0.1:8000/api/show-tasks', {
    headers
  });
  console.log(res)
  if(res.status===200){
    tasks.value=  res.data

  }

}
const deleteItem=async (id)=>{
  // alert(id)
  const response = await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}`);
  if(response.status===200){
    console.log(response.data)
    alert()
  }
}

const randomWeekGoals = ref('');

async function getRandomWeekGoals() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/getRandomWeekGoal');
    if (response.status === 200) {
      randomWeekGoals.value = response.data;
    } else {
      console.error('Error fetching random week goals:', error);
    }
  } catch (error) {
    console.error('Error fetching random week goals:', error);
  }
}

const currentDate=ref('');
function updateCurrentDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  currentDate.value = now.toLocaleDateString('en-US', options);
}

const userName = ref('');
async function fetchUserName() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/user', {
    headers
  });
    userName.value = response.data.name;
  } catch (error) {
    console.error('Error fetching user name:', error);
  }
}





// onMounted(()=>{
  getTodos()
  getRandomWeekGoals()
  updateCurrentDate()
  fetchUserName()
  getReviews()
// })
</script>
<style scoped>
.date{
  position: absolute;
  font-size: 23px;
  top: 1rem;
  background: #2E2AB9;
  color: white;
  right: 6rem;
  text-outline: 2rem;
}
.today{
  min-height: 7rem;
  max-height: 14rem;
  overflow: scroll;
}
.add-todo{
  position: absolute;
  top: 16rem;
  left: 29rem;
  width: 25rem;
  background: dimgrey;
  display: flex;
  justify-content: center;

padding-bottom: 2rem;
}
.close{
  position: absolute;
  font-size: 44px;
  right: 1rem;
  text-outline: 2rem;
}
nav{
  display: flex;
  align-items: center;
  justify-content: center;
}
.container{
  border: 3px solid black;
  border-style: dashed;
  background-color: #eafae3;
}

.todays li{
  background: #ffe5e5;
  color: darkred;
  padding: 5px;
  margin-left: 35px;
}
.reviews li:hover{
  background-color: #2E2AB9;
  color: seagreen;
  transform: scale(1.3);
}
</style>