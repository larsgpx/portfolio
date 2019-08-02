<template>
  <div id="app">
    <v-container fluid class="no-padding">
      <v-layout>
        <v-flex xs3 id="nav" class="left-navbar">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">Nosotros</router-link> | 
        <router-link to="/contact">Contáctanos</router-link>
      </v-flex>
      <v-flex xs9 class="content-side">        
          <router-view />               
      </v-flex>    
      </v-layout>
    </v-container>
    
    <foot></foot>
  </div>
</template>
<script>
import Foot from '@/components/Footer.vue';
export default {
  components:{
    Foot
  }
}
</script>
<style lang="scss">
@import "./assets/sass/main.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
</style>
