<template>
  <div class="portfolio">
    <div class="space-5"></div>
    <v-container class="grey lighten-5">
      <v-row justify="center"
      no-gutters>      
        <v-col cols="12" md="5">
          <crud-portfolio xs12 lg6 xl6></crud-portfolio>        
        </v-col>
        <v-col cols="12" md="1" class="hidden-xs-only"></v-col>
        <v-col cols="12" md="6">
        
          <list-porfolio xs12 lg6 xl6></list-porfolio>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>
<script>
import CrudPortfolio from './Portafolio/CrudPortfolio.vue';
import ListPorfolio from './Portafolio/ListPortfolio.vue';
export default {
  components:{
    ListPorfolio,
    CrudPortfolio
  }
}
</script>
<style lang="scss">
  .center-row{
    margin:0 auto;
    margin-top:15%;
  }
</style>