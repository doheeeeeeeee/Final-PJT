<template>
  <div>
    <h5>Movie Icon</h5>
    <MovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import MovieListItem from '@/components/MovieListItem'

export default {
  name: "MovieList",
  components: {
    MovieListItem
  },
  computed: {
    movies() {
      return this.$store.state.movies
    }
  }
}
</script>

<style>

</style>