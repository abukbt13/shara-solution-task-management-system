<script setup>
import {ref} from "vue";

const modalValue=ref(null)
const todo = ref('')
const error=ref(null)

function clearFields(){
  todo.value=null
}
const alert=ref(false)
function showAlert(){
  alert.value=true
}

function submit(){
  if(todo.value === '')
  {
    error.value='Enter a todo'

  }else{
    clearFields()
       alert('success saved in database')
  }

}

</script>

<template>



  <!-- Button trigger modal -->
  <button type="button" class="btn m-5  btn-primary" data-bs-toggle="modal" data-bs-target="#test1">
   Click me I show you me
  </button>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#wewe">
   Ni weewee
  </button>

  <!-- Modal -->
  <div class="modal fade" id="wewe" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          akujua weweN asdfghjk,l.;/ Nimekuonesha yeye
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="test1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Its me</p><p>Show youu from another button</p>
          <input type="text" v-model="todo">
          <p class="bg-danger text-white">{{error}}</p>
        </div>
        <div class="modal-footer">
          <div class="" v-if="todo">
            <button type="button" @click="submit" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>

          <div class="" v-else="todo">
            <div class="modal-dialog">
              <div class="modal-content">
            <button type="button" @click="submit" class="btn btn-secondary">Close</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>



  <button  data-bs-toggle="modal" class="btn btn-primary" data-bs-target="#wewe">learn button</button>


<ul>
  <li  data-bs-toggle="modal" data-bs-target="#wewe">Click me I show you wewe</li>
  <li  data-bs-toggle="modal" data-bs-target="#test1">Click me I am showing another</li>

</ul>
  <button @click="showAlert" class="btn btn-success">Show alert</button>

  <div v-show="alert" class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>

</template>

<style scoped>

</style>