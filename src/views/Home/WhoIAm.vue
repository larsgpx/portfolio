<template>
    <v-container>
        <div class="space-1"></div>
        <v-layout wrap>
            <!-- quien soy -->
            <v-flex xs9 row>
                <v-flex class="info-text" xs7>
                    <h4 class="text-left">Sobre mí</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque cupiditate, dolor saepe eligendi accusantium eveniet magnam neque placeat aperiam? Labore inventore qui iure quas quibusdam pariatur maiores minus consectetur sunt?</p>     
                </v-flex>
                <v-flex class="info-text" xs5>
                    <v-card class="bg-trans">
                        <v-list dense>
                <v-list-item>
                  <v-list-item-content class="titles">Localidad:</v-list-item-content>
                  <v-list-item-content class="align-end">Lima</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content class="titles">Email:</v-list-item-content>
                  <v-list-item-content class="align-end">Larsgpx@gmail.com</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content class="titles">Teléfono:</v-list-item-content>
                  <v-list-item-content class="align-end">955 549 584</v-list-item-content>
                </v-list-item>
                
              </v-list>
                    </v-card>
                </v-flex>
        
            
            </v-flex>
            <v-flex class="developer-portfolio" xs3>
                    <h4 class="text-left" >FRONT-END DEVELOPER</h4>
                    <h5 class="text-left" >LARRY GARCÍA</h5>
            </v-flex>      
        </v-layout>
        <div class="space-1"></div>
        <!-- que puedo hacer por ti -->
        <v-layout wrap>            
            <v-flex xs12 xl6 row>
                <div class="info-text">
                    <h4 class="text-left">¿Que puedo hacer por tí?</h4>                    
                </div>
                <div class="space-1"></div>
                <v-expansion-panels dark popout>                   
                    <!-- Diseño -->
                     <v-expansion-panel >
                        <v-expansion-panel-header>diseño
                            <template v-slot:actions>
                                    <v-icon color="#42b983">mdi-chevron-down</v-icon>
                            </template>
                        </v-expansion-panel-header>
                                 
                        <v-expansion-panel-content flat>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                     <!-- prototipado -->
                     <v-expansion-panel >
                        <v-expansion-panel-header>Prototipado
                            <template v-slot:actions>
                                    <v-icon color="#42b983">mdi-chevron-down</v-icon>
                            </template>
                        </v-expansion-panel-header>
                                 
                        <v-expansion-panel-content flat>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <!-- paginas web -->
                    <v-expansion-panel >
                        <v-expansion-panel-header>Páginas web
                            <template v-slot:actions>
                                    <v-icon color="#42b983">mdi-chevron-down</v-icon>
                            </template>
                        </v-expansion-panel-header>
                                 
                        <v-expansion-panel-content flat>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel>
                        <v-expansion-panel-header>Apps
                            <template v-slot:actions>
                                    <v-icon color="#42b983">mdi-chevron-down</v-icon>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    
}
</script>