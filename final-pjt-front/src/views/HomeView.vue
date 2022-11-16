<template>
  <div class="home">
    <h1>movies</h1>
    <MovieList/>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieList from '@/components/MovieList'

export default {
  name: "HomeView",
  components: {
    MovieList,
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  created() {
    this.getMovies()
  },
  methods: {
    getMovies() {
      this.$store.dispatch("getMovies")
    },
  },
}
</script>
