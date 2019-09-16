<template>
   <v-container class="carousel-content">          
        <div class="info-text">
            <h4 class="text-left">Algunos de los trabajos que he realizado!
            <!-- <router-link class="btn-naranja" to="portafolio">
                    <v-btn class="" fab dark small color="#FF8F00">
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>                                                              
            </router-link>     -->
            </h4>  
                
                
        </div>
        <div class="space-1"></div>
        <v-card            
            dark
            outlined
            flat
            tile
            class="bg-trans"
        >
            <v-window v-model="onboarding">
            <v-window-item
                v-for="(port,index) in portafolios" :key="index"
            >
                <v-card
                color="transparent"                
                >
                <v-layout
                    align-center
                    justify-center
                    fill-height
                    tag="v-card-text"
                >
                    <v-card
                    class="mx-auto"                    
                    flat
                >
                    <v-list-item three-line>
                    <v-list-item-content class="text-carousel">                        
                    <v-flex xs12 xl1 lg1 class="hidden-xs-only"></v-flex>
                    <v-flex xs12 xl6 lg6>                            
                            <div class="title mb-4">Descripción del proyecto</div>                        
                            <v-list-item-subtitle class="sub">{{port.description}}</v-list-item-subtitle>
                            <div class="sub-title mb-4">Detalles</div>                        
                            <v-list dense>
                                <v-list-item>
                                    <v-list-item-content class="list-content-space-left">
                                        <v-icon class="start-icon">mdi-account</v-icon> 
                                        Cliente:</v-list-item-content>
                                    <v-list-item-content class="align-end gray-light">{{port.name}}</v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content class="list-content-space-left">
                                        <v-icon class="start-icon">mdi-calendar</v-icon>
                                        Realizado el:</v-list-item-content>
                                    <v-list-item-content class="align-end gray-light">{{ port.fecha }}</v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content class="list-content-space-left">
                                        <v-icon class="start-icon">mdi-tag</v-icon>
                                        Tipo de proyecto:</v-list-item-content>
                                    <v-list-item-content class="align-end gray-light">{{port.type}}</v-list-item-content>
                                </v-list-item>
                      
                            </v-list>
                    </v-flex>
                    <v-flex xl1 lg1 class="hidden-xs-only"></v-flex>
                    <v-flex xs12 xl4 lg4 class="hidden-xs-only">                        
                        <v-img
                            :src="port.img"
                            lazy-src="https://picsum.photos/id/11/10/6"                            
                            class="img-rounded"                                                                                                            
                            >
                        </v-img>
                    </v-flex>

                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                        class="hidden-xs-only"
                    ></v-list-item-avatar>
                    </v-list-item>                                   
                </v-card>
                </v-layout>
                </v-card>
            </v-window-item>
            </v-window>

            <v-card-actions class="align-center">
            <v-btn
                text
                @click="prev"
            >
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-item-group
                v-model="onboarding"
                class="text-center"
                mandatory
            >
                <v-item
                v-for="(port,index) in portafolios.length" :key="index"
                v-slot:default="{ active, toggle }"
                >
                <v-btn
                    :input-value="active"
                    icon
                    @click="toggle"
                >
                    <v-icon>mdi-record</v-icon>
                </v-btn>
                </v-item>
            </v-item-group>
            <v-btn
                text
                @click="next"
            >
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
            </v-card-actions>
        </v-card>
   </v-container>
</template>
<script>
import Firebase, { storage } from 'firebase';
import { db } from '../../Firestore'; 
   export default {
    data: () => ({      
      window: 0,
      showArrows: false,     
      autorun: true,
      onboarding: 0,
      portafolios: [] 
    }),
     firestore() {
      return {
        portafolios: db.collection('Portafolios'),
      }
    },
    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
    created () {
      setInterval(() => {
        if (!this.autorun) return
        if (++this.window >= this.length) this.window = 0
      }, 3000)
    },
  }
  </script>
  <style lang="scss" scoped>
  .carousel-content{
      z-index: 10;
      position: relative;
  }
  .text-carousel{
      text-align: left; 
      padding-left: 15px;
      .title{
            color:#42b983;
            font-weight: 300;
            font-size: 24px;
            margin-bottom: 15px;
            margin-top:80px;
      }
      .sub-title{
            color:#42b983;
            font-weight: 300;
            font-size: 24px;
            margin-top:30px;
            margin-bottom: 15px;
      }
      .sub{
          line-height: 25px;
      }
  }
  .start-icon{
      position: absolute;
      left:15px;
      color:#FF8F00!important;
  }
  .list-content-space-left{
      padding-left: 60px!important;
  }
.btn-naranja{
    text-decoration: none;
    &:hover{
        text-decoration: none;
    }
    margin-left: 15px;
}

  //para moviles
@media screen and (max-width: 600px) {
    .list-content-space-left{
      padding-left: 0px!important;
  }
  .start-icon{
      left:-15px;
  }
  .hidden-xs-only{
      display:none!important;
      
  }
.text-carousel{
    .title{
        margin-top:0px;
    }
    .sub{
        min-height:150px;
    }
}
}
  </style>
  