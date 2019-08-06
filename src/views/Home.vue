<template>
  <div class="home">        
    <!-- <img src="../assets/banner-laptop.jpg" alt="" srcset=""> -->
    <Banner image="banner-laptop.jpg" /> 
    <who-i-am></who-i-am>
    <div class="space-2"></div>
    
  </div>
</template>

<script>
// @ es un alias para /src
import Banner from "./Home/Banner.vue";
import WhoIAm from "./Home/WhoIAm.vue";
export default {
  name: "home",
  components: {
    Banner,
    WhoIAm
  }
};
</script>
