<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/counter">Counter</router-link> |
    <router-link to="/ref">Ref</router-link> |
    <router-link to="/todos">Events</router-link> |
    <router-link to="/provide-inject">Provide</router-link> |
    <router-link to="/state-management">State</router-link> |
    <router-link to="/mouse">Mouse</router-link> |
    <router-link to="/fetch">Fetch</router-link> |
    <router-link to="/about">Todos <small>(composable)</small></router-link> |
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
div {
  margin: 10px 0 0;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
