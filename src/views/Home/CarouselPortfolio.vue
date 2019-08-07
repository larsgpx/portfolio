<template>
   <v-container>
        <v-layout column align-center>           
            <v-window
            v-model="window"
            class="elevation-1"
            :vertical="vertical"
            :show-arrows="showArrows"        
            dark    
            >
            <v-window-item
                v-for="n in length"
                :key="n"
            >
                <v-card
                    class="mx-auto"                    
                    outlined
                >
                    <v-list-item three-line>
                    <v-list-item-content class="text-carousel">                        
                    <v-flex xs4>
                            <div class="overline mb-4">Overline</div>                        
                            <v-list-item-subtitle class="sub">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi velit ipsum fugiat qui accusantium animi aliquid eaque doloremque optio, praesentium architecto repellat accusamus voluptates obcaecati voluptatibus iure amet quod odit.</v-list-item-subtitle>
                            <div class="overline mb-4">Overline</div>                        
                            <v-list dense>
                                <v-list-item>
                                    <v-list-item-content><v-icon>mdi-chevron-right</v-icon> Calories:</v-list-item-content>
                                    <v-list-item-content class="align-end">contenido</v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content><v-icon>mdi-chevron-right</v-icon>Fat:</v-list-item-content>
                                    <v-list-item-content class="align-end">contenido</v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content><v-icon>mdi-chevron-right</v-icon>Carbs:</v-list-item-content>
                                    <v-list-item-content class="align-end">contenido</v-list-item-content>
                                </v-list-item>
                      
                            </v-list>
                    </v-flex>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                    ></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                    <v-btn text>Button</v-btn>
                    <v-btn text>Button</v-btn>
                    </v-card-actions>
                </v-card>
            </v-window-item>
            </v-window>
        </v-layout>
   </v-container>
</template>
<script>
   export default {
    data: () => ({
      length: 3,
      window: 0,
      showArrows: true,     
      autorun: true
    }),

    created () {
      setInterval(() => {
        if (!this.autorun) return
        if (++this.window >= this.length) this.window = 0
      }, 3000)
    },
  }
  </script>
  <style lang="scss" scoped>
  .text-carousel{
      text-align: left; 
      .overline{
          color:#42b983;
          font-weight: 300;
          font-size: 20px;
          margin-bottom: 15px;
      }
      .sub{
          line-height: 25px;
      }
  }
  </style>
  