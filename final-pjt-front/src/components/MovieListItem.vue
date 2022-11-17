<template>
  <div>
    <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" alt=""><br>
    <span>제목 : {{ movie.title }}</span><br>
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

</style>