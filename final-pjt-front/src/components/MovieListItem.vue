<template>
  <div class="card">
    <!-- <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" alt=""><br>
    <span>{{ movie.title }}</span><br> -->
      <b-card :title="movie.title" :img-src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" img-top>
      </b-card>
  </div>
</template>

<script>
export default {
  name: "MovieListItem",
  props: {
    movie: Object,
  },
  data() {
    return {

    }
  }
}

</script>

<style>
b-card {
  width: 200px;
}
</style>