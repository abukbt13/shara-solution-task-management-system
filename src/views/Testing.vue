<script setup>
import Swal from 'sweetalert2'
import {ref} from "vue";
import Work from "@/views/Work.vue";

function markComplete(){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
      )
    }
  })
}
// import {mine,changeColor} from '@/views/Testing.vue'

const changeColor = () => {
  mine.value.style.backgroundColor = 'yellow';
};
</script>
<template>
  <h2>hello world</h2>
<Work />
</template>