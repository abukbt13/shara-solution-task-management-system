<script setup>
import {showTask} from "@/composable/showTask";
const {mytasks,greetings}=showTask()
</script>
<template>
  <p>The following are my tasks</p>

  <ul v-for="mytask in mytasks" :key="mytask">
    <li @click="greetings">{{mytask.todo}}</li>
  </ul>
</template>