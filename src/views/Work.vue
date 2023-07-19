<script setup>
import {ref} from "vue";

const mine = ref(null);
const changeColor =ref(null)

</script>

<template>
<p>This is project view area</p>
<!--  <button @click="markComplete" class="btn btn-success">Test Sweet alert</button>-->

  <div class="" ref="mine">Try edit me</div>

  <button @click="changeColor" class="btn btn-dark">Change color</button>
</template>

<style scoped>

</style>