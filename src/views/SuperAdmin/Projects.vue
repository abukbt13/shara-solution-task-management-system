<script setup>
</script>
<template>
    <p>fghjk</p>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> 

    <!-- <div class="modal fade" id="create_project" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-primary">Create New Project</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="card">
            <p></p>
            <div class="card-body">
              <form @submit.prevent="">
                <div class="mb-3">
                  <label class="form-label">Name</label>
                  <input type="text" v-model="name" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">Description</label>
                  <input type="text" v-model="description" class="form-control" >
                </div>
                <button type="submit" class="btn btn-primary">Create</button>                          
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>