<script setup>
import {ref} from "vue";

const youtubeUrl = ref('')
const videoId = ref('')
const embedUrl = ref('')
function getVideoId() {
  const regex = /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-]+)(&(amp;)?[\w\?=]*)?/;
  const match = youtubeUrl.value.match(regex);
  if (match && match[1]) {
    videoId.value= match[1];
    embedUrl.value = `https://www.youtube.com/embed/${videoId.value}`;
  } else {
    videoId.value = youtubeUrl;
    embedUrl.value = youtubeUrl;
  }
}

</script>

<template>
  <input type="text" v-model="youtubeUrl" placeholder="youtube link">
  <button @click="getVideoId">Confirm Url</button>
  <p>Youtube Id</p>
  {{videoId}}
  <br>
  <p>Embed urrl</p>
  {{embedUrl}}

</template>

<style scoped>

</style>