<template>
  <div class="hola">
    <h1>{{msg}}</h1>
    Hola {{ $route.params.name }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'PrimeraRuta',
  data () {
    return {
      msg: 'PrimeraRuta'
    }
  }
}
</script>


<style scoped>
</style>
