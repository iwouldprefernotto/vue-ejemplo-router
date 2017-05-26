<template>
  <div class="container" id="app">

    <img src="./assets/logo.png">
    <div class="">
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/firstroute/Julio">Primera Ruta</router-link></li>
        <li><router-link to="/firstroute/Julio/child">Primera ruta anidada</router-link></li>
      </ul>

    </div>
    <router-view></router-view>
    <br/><br/><hr/>
    <div class="footer">
      <p>&copy <a href="http://jleiva.es" target="_blank">Julio Leiva.es</a> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
