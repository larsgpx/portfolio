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
import { db } from '../Firestore'; 
import * as moment from 'moment';
import CrudPortfolio from './Portafolio/CrudPortfolio.vue';
import ListPorfolio from './Portafolio/ListPortfolio.vue';

export default {  
  components:{
    ListPorfolio,
    CrudPortfolio
  },     
    mounted(){
      const proyect = this.$refs.FormData;
    },
    data(){
      return{
        portafolios: []        
      }
    },
    firestore() {
      return {
        portafolios: db.collection('Portafolios'),
      }
    },
    methods:{
        getHumanDate : function (date) {
            return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
        },
        addPortfolio(){                        
            // FirebaseRef.push(this.$refs.FormData.newProyect);                
            this.$firestore.portafolios.add(
              {                                
                 name : this.$refs.FormData.newProyect.name,
                 fecha : this.getHumanDate(this.$refs.FormData.newProyect.fecha),
                 type : this.$refs.FormData.newProyect.type,
                 description : this.$refs.FormData.newProyect.description,
                 url    : this.$refs.FormData.newProyect.url,   
                 timestamp: new Date(),
              }
            );
            this.$refs.FormData.newProyect.name = '';
            this.$refs.FormData.newProyect.fecha = '';
            this.$refs.FormData.newProyect.type = '';
            this.$refs.FormData.newProyect.description = '';
            this.$refs.FormData.newProyect.url = '';   
        },
        deletePortfolio(port){            
            this.$firestore.portafolios.doc(port).delete();
        }
    }
}
</script>
<style lang="scss">
  .center-row{
    margin:0 auto;
    margin-top:15%;
  }
  .theme--light.v-footer{
    position: absolute!important;
  }
  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>