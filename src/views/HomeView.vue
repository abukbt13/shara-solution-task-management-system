<template>

  <div class="container mt-1">
    <span class="date text-decoration-underline">Today 22/05/2023</span>
    
        <h2 class="text-center text-decoration-underline text-primary">My daily planning 26/05/2023</h2>
        <p style="color: #4A76A1;" class="text-center text-decoration-underline">Good morning Benard</p>

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
                <tr v-for="item in todos" :key="item">
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
                  <a href="/" data-mdb-toggle="edit" title="Edit">
                    <i class="fas fa-pencil-alt" @click="editItem" style="font-size: 20px; "></i>
                  </a>
                  &nbsp;
                  <a href="/" data-mdb-toggle="delete" title="Delete">
                    <i class="fas fa-trash-alt" @click="deleteItem" style="font-size: 20px; "></i>
                  </a>
                  </td>
                </tr>

              </tbody>
            </table>

            </div>
        </div>



              <div class="weeklytheme">
                <h5 style="text-align: center;">Weekly Goals</h5>
                <ul style="list-style: disc;">
                  <li>  Many of life's failures are people who did not realize how
                    close they were to success when they gave up.
                  </li>
                  <li>
                    Many of life's failures are people who did not realize how.
                  </li>
                  <li>
                    Many of life's failures are people who did not realize how.
                  </li>
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
            <div class="get-review">
              <h2 style="color: #0E122B;" class="text-align-left text-decoration-underline">Recent Reviews</h2>
              <ol>
                <li class="mt-2">22/05/2023 <span>Wednesday</span> <span><button class="btn btn-sm btn-primary">click view</button></span></li>
                <li class="mt-2">22/05/2023 <span>Wednesday</span> <span><button class="btn btn-sm btn-primary">click view</button></span></li>
                <li class="mt-2">22/05/2023 <span>Wednesday</span> <span><button class="btn btn-sm btn-primary">click view</button></span></li>
              </ol>
            </div>

             <div class="ms-4 add-review">
              <p>How was your day</p>
              <textarea name="review" class="form-control" id="review" cols="30" rows="3" placeholder="describe your experience or say something concerning this "></textarea>
             <button class="mt-3 w-50 btn btn-sm btn-secondary">add review</button>
            </div>
<!--            <div style="justify-content:center;align-items:center;display:flex;width: 8rem;height: 8rem;border-radius: 50%; border:12px solid blue;" class="rectangle">-->
<!--              <div class="square">-->
<!--                <p style="transition: ease-in-out; transition-property: background-position;tran">love wins</p>-->
<!--              </div>-->
<!--            </div>-->
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
</template>

<script setup>
// @ is an alias to /src
import {onMounted, ref} from "vue";
import axios from "axios";
import router from "@/router";
import {useRouter} from "vue-router";
const showdate=ref('')
const addtodo=ref(false)
const r= useRouter()

const token=localStorage.getItem('token');
if(!token){
  r.push('/login')
}
// alert(token)

function showAddbtn(){
  addtodo.value=true
}
function close(){
      addtodo.value=false
}
const k=ref('')
const todo=ref('')

const submit=async ()=> {
  console.log(todo)
  const formData = new FormData();

  formData.append('todo', todo.value);
  const headers = {
    'Authorization': `Bearer ${token}`,
  };

  const res = await axios.post('http://127.0.0.1:8000/api/tasks', formData, {
    headers: headers
  });
  if(res.status==200){
  window.location.reload();
  }


}

const todos=ref([])
const getTodos=async () =>{
  const res = await axios.get('http://127.0.0.1:8000/api/tasks')
  // console.log(res)
  if(res.status===200){
    todos.value=  res.data
  }

}
onMounted(()=>{
  getTodos()
})
</script>
<style>
.date{
  position: absolute;
  font-size: 23px;
  top: 1rem;
  background: #
  2E2AB9;
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
  //align-items: center;
  //height: 100vh;
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

</style>