<template>
  <div class="home">        
    <!-- <img src="../assets/banner-laptop.jpg" alt="" srcset=""> -->
    <Banner  id="home-banner" image="banner-laptop.jpg" /> 
    <who-i-am  id="whoIam"></who-i-am>
    <div class="space-2"></div>
    <time-line  id="timeLine"></time-line>
    <knowledge  id="knowledge"></knowledge>
    <div class="full-bg-abstract-content">
      <carousel-portfolio id="portfolio"></carousel-portfolio>    
      <div class="abstract-full-bg"></div>
      <clients></clients>
    </div>
    
    <formulario></formulario>
  </div>
</template>

<script>
// @ es un alias para /src
import Banner from "./Home/Banner.vue";
import WhoIAm from "./Home/WhoIAm.vue";
import TimeLine from "./Home/TimeLine.vue";
import Knowledge from "./Home/Knowledge.vue";
import CarouselPortfolio from "./Home/CarouselPortfolio.vue";
import Clients from "./Home/Clients.vue";
import Formulario from "../components/part/Formulario.vue";
export default {
  name: "home",
  components: {
    Banner,
    WhoIAm,
    TimeLine,
    Knowledge,
    CarouselPortfolio,
    Clients,
    Formulario
  }
};
</script>
<style lang="scss">
  .theme--light.v-footer{
    position:inherit!important;
  }
</style>