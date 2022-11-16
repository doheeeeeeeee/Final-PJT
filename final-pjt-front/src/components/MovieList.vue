<template>
  <div>
    <h3>Movie List</h3>
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
  computed: {
    movies() {
      return this.$store.state.movies
    }
  },
  components: {
    MovieListItem,
  }
}
</script>

<style>

</style>