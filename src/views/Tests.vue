<template>
  <p>{{ appTitle }}</p>
  <ul v-for="number in numbers" :key="number">
    <li>The name of Child is {{number.name}} and the age is {{number.age}}</li>
  </ul>
  <div class="w-25">
  <form @submit.prevent="saveYoutubeDetails">
    <p>You tube details</p>
    <label class="text-uppercase" for="">Name </label>
    <input type="text" class="form-control" v-model="vid_name" placeholder="Name of the viedeo">
    <label class="text-uppercase" for="">youtube link</label>
    <input name="todo" v-model="youtube_link"   class="form-control" placeholder="Enter link here .....">
    <span class="text-danger" v-if="error">{{ error }}</span>

    <div class="mt-1 float-end">

      <button  type="submit"  class="btn btn-secondary">Save video link</button>

    </div>
  </form>
    {{error}}
  </div>

  <router-link v-for="youtube in youtubes" :key="youtube" :to="`/youtube/${youtube.link}`" class="btn btn-primary m-1">{{ youtube.name}}</router-link>

</template>

<script setup>
import {ref} from "vue";

// const error = ref('')
import { youtube } from "@/composable/youtube";

const { appTitle,error,getYoutube,numbers,saveYoutubeDetails,youtubes } = youtube();
</script>

<style scoped>
/* Your styles here */
</style>
