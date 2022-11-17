<template>
  <b-card-group deck>
    <MovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </b-card-group>
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
  data() {
    return {

    }
  },
  components: {
    MovieListItem,
  },
}
</script>

<style>
#movie-list {
  width: 25%;
  display: inline-block;
}
</style>