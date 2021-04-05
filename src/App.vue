<template>
  <div id="app">
    <div id="nav">
      <NavBar />
      <!-- <SearchBar /> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/Navbar'

export default {
  name: 'app',
  components: {
    NavBar,
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,600;1,300;1,800&display=swap');
#app {
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  padding: 1rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav a.router-link {
  color: #42b983;
}
</style>
