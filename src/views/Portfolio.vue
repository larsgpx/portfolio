<template>
  <div class="portfolio">
    <v-container class="grey lighten-5">
      <v-row justify="center"
      no-gutters>
        <list-porfolio xs12 lg6></list-porfolio>
      </v-row>
    </v-container>

  </div>
</template>
<script>
import ListPorfolio from './Portafolio/ListPortfolio.vue';
export default {
  components:{
    ListPorfolio
  }
}
</script>
<style lang="scss">
  .center-row{
    margin:0 auto;
    margin-top:15%;
  }
</style>