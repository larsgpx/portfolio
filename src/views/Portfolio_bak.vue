<template>
  <div class="portfolio">
    <div class="space-5"></div>
    <v-container class="grey lighten-5">
      <v-row justify="center"
      no-gutters>      
        <v-col cols="12" md="5">
          <crud-portfolio :addPort="addPortfolio" ref="FormData" xs12 lg6 xl6></crud-portfolio>        
        </v-col>
        <v-col cols="12" md="1" class="hidden-xs-only"></v-col>
        <v-col cols="12" md="6">
        
          <list-porfolio xs12 lg6 xl6 :deletePort="deletePortfolio" :listado="portafolios"></list-porfolio>
        </v-col>
      </v-row>
    </v-container>    
  </div>
</template>
<script>
import Firebase from 'firebase';
import config from '../config';
let app = Firebase.initializeApp(config);
let db = app.database();
let FirebaseRef = db.ref('portafolios');
import CrudPortfolio from './Portafolio/CrudPortfolio.vue';
import ListPorfolio from './Portafolio/ListPortfolio.vue';

export default {  
  components:{
    ListPorfolio,
    CrudPortfolio
  },
    firebase: function(){
        return{
            // portafolios:FirebaseRef // portafolios es el nombre de referencia que se usara para llamar un array con V-for por ejemplo, con eso estare llamando el arreglo portafolios
            portafolios:{
              source: db.ref('portafolios'),
              cancelCallback(err) {
                console.error(err);
              }
            }
        }
    },  
    mounted(){
      const proyect = this.$refs.FormData;
    },
    data(){
      return{
        portafolios: []
      }
    },
    methods:{
        addPortfolio(){                        
            FirebaseRef.push(this.$refs.FormData.newProyect); 
            this.$refs.FormData.newProyect.name = '';
            this.$refs.FormData.newProyect.fecha = '';
            this.$refs.FormData.newProyect.type = '';
            this.$refs.FormData.newProyect.description = '';
            this.$refs.FormData.newProyect.url = '';            
        },
        deletePortfolio(){
            FirebaseRef.child(portafolios['.key']).remove();
        }
    }
}
</script>
<style lang="scss">
  .center-row{
    margin:0 auto;
    margin-top:15%;
  }
</style>