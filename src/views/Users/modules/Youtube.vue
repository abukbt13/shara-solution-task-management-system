<script setup>
import {useRoute} from "vue-router";

const route = useRoute()

const id = route.params.id

 function getYouTubeEmbedURL(videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }


</script>
<template>
  <a href="/" class="btn btn-danger">Go Back</a>
  <h2>my video</h2>
  <div>
    <iframe width="747" height="420" :src="getYouTubeEmbedURL(id)"
            title="Miyamoto Musashi | The Path of the Loner" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
            picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</template>



<style scoped>

</style>