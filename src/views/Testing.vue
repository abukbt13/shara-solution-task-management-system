<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#delete">
    Launch demo modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="delete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

          <p style="font-size: 22px;" class="text-danger text-lg-start mt-5 ms-3">Are you sure you want to delete the Record ?</p>

       <div class="">
         <button  class="btn btn-danger m-2 float-end">Delete</button>

         <button data-bs-dismiss="modal" class="btn btn-primary m-2 float-end">Cancel</button>
       </div>
     </div>
    </div>
  </div>
</template>
<script setup>
</script>