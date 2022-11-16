<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
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
      // this.$store.dispatch("getMovies")
      if (this.isLogin) {
        console.log("로그인 완료");
        this.$store.dispatch("getMovies");
      } else {
        alert("로그인이 필요한 서비스 입니다.");
        this.$router.push({ name: "LogInView" });
      }
    },
  },
};
</script>
