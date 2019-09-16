<template>
    <v-container>
        <div class="space-1"></div>
        <v-layout wrap>
            <!-- quien soy -->
             <div class="space-1 space-bg space-bg-left">
                    <div class="abstract-bg-left"></div>
                </div>
            <v-flex xs12 xl9 lg9 row>
                <v-flex class="info-text" xs12 lg7 xl7>
                    <h4 class="text-left">Sobre mí</h4>
                    <p>Ingeniero informático con mas de 2 años en conocimiento a nivel FrontEnd y desarrollo de aplicaciones web basados en el lenguaje PHP haciendo uso de frameworks modernos como Laravel para el backend y Vue JS  para el Front End Bajo estandares UX/UI y con alta experiencia en desarrollo de aplicaciones web usando frameworks de maquetado como Bootstrap 3+, Vuetify, Material Design, ES6, Html5 y css3 con preprocesadores Sass. Uso de metodologías agiles SCRUM.</p>     
                </v-flex>
                <v-flex class="info-text" xs12 lg5 xl5>
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
                  <v-list-item-content class="align-end">+51 955 549 584</v-list-item-content>
                </v-list-item>
                
              </v-list>
                    </v-card>
                </v-flex>
        
            
            </v-flex>
            <v-flex class="developer-portfolio hidden-xs-only" xs12 lg3 xl3>
                    <h4 class="text-left" >FRONT-END DEVELOPER</h4>
                    <h5 class="text-left" >LARRY GARCÍA</h5>
            </v-flex>      
        </v-layout>
        <div class="space-2"></div>
        <!-- que puedo hacer por ti -->
        <v-layout wrap>            
            <v-flex xs12 xl6 row>
                <div class="info-text">
                    <h4 class="text-left">¿Que puedo hacer por tí?</h4>                    
                </div>                
                <div class="space-2"></div>
                <v-expansion-panels dark popout>                   
                    <!-- Diseño -->
                     <v-expansion-panel >
                        <v-expansion-panel-header>diseño
                            <template v-slot:actions>
                                    <v-icon color="#42b983">mdi-chevron-down</v-icon>
                            </template>
                        </v-expansion-panel-header>
                                 
                        <v-expansion-panel-content flat>
                            Hoy en dia, un buen diseño es lo que te hará resaltar sobre el resto, en mi rama, un buen desarrollo junto a un diseño lo es todo! Siempre pensando en que manera poder transmitir un buen manejo de UX y que este llegue a todo tipo de usuarios de una manera sencilla y en pocos pasos.
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
                            El prototipo es una representación interactiva de un sitio web. No es necesario que todo esté estructurado de forma definitiva. Pero sí debes conocer y tener presentes los elementos clave para mostrar el funcionamiento a tus clientes. Siempre que uso esta metodología estudio la audiencia para asi en base a eso, poder encontrar la estructura apropiada para poder transmitir lo que el cliente quiere.
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
                            El desarrollo de paginas web pueden servir de muchas formas, para poder transmitir una idea, para tener a la mano una herramienta en todas partes que vayas. Las paginas web deben ser el centro de cualquier estrategia online. Son mi pasión y siempre que desarrollo una nueva intento innovar en algo que las diferencie del resto.
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel>
                        <v-expansion-panel-header>Apps
                            <template v-slot:actions>
                                    <v-icon color="#42b983">mdi-chevron-down</v-icon>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            Las apps son el futuro, actualmente se pueden ofrecer apps multiplataformas.
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