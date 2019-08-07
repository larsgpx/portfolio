<template>
  <div class="home">        
    <!-- <img src="../assets/banner-laptop.jpg" alt="" srcset=""> -->
    <Banner id="home-banner" image="banner-laptop.jpg" /> 
    <who-i-am id="whoIam"></who-i-am>
    <div class="space-2"></div>
    <time-line id="timeLine"></time-line>
    <knowledge id="knowledge"></knowledge>
    <carousel-portfolio></carousel-portfolio>
  </div>
</template>

<script>
// @ es un alias para /src
import Banner from "./Home/Banner.vue";
import WhoIAm from "./Home/WhoIAm.vue";
import TimeLine from "./Home/TimeLine.vue";
import Knowledge from "./Home/Knowledge.vue";
import CarouselPortfolio from "./Home/CarouselPortfolio.vue";
export default {
  name: "home",
  components: {
    Banner,
    WhoIAm,
    TimeLine,
    Knowledge,
    CarouselPortfolio
  }
};
</script>
