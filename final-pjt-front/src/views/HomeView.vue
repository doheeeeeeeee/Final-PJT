<template>
  <div class="home">
    <h1>movies</h1>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "HomeView",
  components: {

  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  created() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      this.$store.dispatch("getMovies")
    },
  },
};
</script>
