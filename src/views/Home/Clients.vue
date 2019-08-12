<template>
    <v-container grid-list-md text-center>
      <!-- <div class="space-bg">
          <div class="abstract-full-bg"></div>
      </div> -->
    <v-layout wrap align-center justify-center>      
      <v-flex v-for="(client,index) in clients" :key="index" xs6 xl2 lg2>
        <v-card dark color="primary" class="bg-trans ">
          <v-card-text class="px-0" >
                <v-img 
                    :src="require('@/assets/'+client)"                    
                    aspect-ratio="1"
                    class="bg-trans img-center"
                    width="100"    
                    contain                
                ></v-img>                             
          </v-card-text>
        </v-card>
      </v-flex>      
    </v-layout>
  </v-container>
</template>
<script>
export default {
    data(){
        return{
            clients:[
                'tbs-icon.png',
                'esthercita-icon-white.png',
                'movistar-logo-1.png',
                'Brandteam-icon.png',
                'vertical-icon.png',
                'confianza.icon.png'
            ],
            publicPath: process.env.BASE_URL + 'assets/',
            test:'tbs-icon.png'
        }
    }
}
</script>