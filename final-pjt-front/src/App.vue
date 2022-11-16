<template>
  <div id="app">
    <b-nav small>
      <b-nav-item link>
        <router-link to="/">Home</router-link>
      </b-nav-item>
      <b-nav-item link>
        <router-link :to="{ name: 'SignUpView' }">Signup</router-link>
      </b-nav-item>
      <b-nav-item link>
        <router-link :to="{ name: 'LogInView' }">Login</router-link>
      </b-nav-item>
    </b-nav>
    <!-- <nav>
      <router-link to="/">
        <img src="@/assets/logo.png" alt="" />
      </router-link>
      |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav img {
  display: inline-block;
  width: 30px;
  height: 30px;
}
</style>
