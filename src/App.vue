<template>
  <div id="app">
    <v-container fluid class="no-padding">
      <v-layout>
        <v-flex sm2 xs12 id="nav" class="left-navbar hidden-xs-only">
          <div class="js-container">
            <h1>JS</h1>            
            <h6>Larry García</h6>
            <p dark>Desarrollador Front-End</p>
          </div>
          <menur class="pt-3"></menur>      
      </v-flex>
      <v-flex sm2 xs12 class="hidden-xs-only">

      </v-flex>
      <v-flex sm10 xs12 class="content-side">        
          <transition name="fade">
            <router-view class="dark-bg" />               
          </transition>
      </v-flex>    
      </v-layout>
    </v-container>
        <v-speed-dial        
      :bottom="true"
      :right="true"      
      direction="top"   
      :fixed="true"       
    >
      <template v-slot:activator>
        <v-btn          
          color="#42b983"
          dark
          fab
          class="float-boton"
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else> mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="#455a64"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="#455a64"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="#455a64"
      >
        <v-icon>mdi-xml</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="#455a64"
      >
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
    </v-speed-dial>    
    
    <foot></foot>
  </div>
</template>
<script>
import Foot from '@/components/Footer.vue';
import Menur from '@/components/Menur.vue';
// import Firebase from 'firebase';
// import config from './config';
// let app = Firebase.initializeApp(config);
// let db = app.database();
// let websiteRef = db.ref('websites');

export default {
  components:{
    Foot,
    Menur
  },
  // firebase:{
  //   websites:websiteRef
  // },
  data(){
    return{      
      current: '',
      newWebsite:{
        name:'',
        author:'',
        url:''
      }
    }    
  },
  computed: {
      currentPage(){
        return this.$router.history.current.name;
      }
  }
}
</script>
<style lang="scss">
@import "./assets/sass/main.scss";
.float-boton{
  z-index: 999999;
}
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
