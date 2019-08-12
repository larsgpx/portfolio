<template>
    <v-container class="form-content">
       <v-layout row>
           <v-flex lg5 xs12 xl5>
                <div class="info-text">
                    <h4 class="text-left">Hablemos!</h4>
                    <h6 class="sub-text-left">¿Que puedo hacer por ti?</h6>
                    <p dark> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>                    
                </div>
                <div class="space-3"></div>
                <v-form
                ref="form"                             
                class="form-style"
                >
                    <v-text-field                        
                        label="Nombre Completo"
                        outlined
                        required
                    ></v-text-field>

                    <v-text-field                                          
                        label="E-mail"
                        required
                        outlined
                    ></v-text-field>  

                    <v-text-field                                                        
                            label="Tema"
                            required
                            outlined
                    ></v-text-field>        
                    <v-text-field                            
                            label="Mensaje"
                            required
                            outlined
                    ></v-text-field>   

                    <v-btn                         
                        color="#FF8F00"                      
                        class="mr-4 btn-form align-end"                        
                    >
                        Enviar
                    </v-btn>
                    
                </v-form>
           </v-flex>
           <v-flex lg2 xs13 xl3 class="mt-3">
               <div class="info-text ml-1">                    
                    <h6 class="sub-text-left mt-3 ml-1">Redes Sociales</h6>
                    <v-layout align-content-center justify-start mt-1 ml-2>
                        <v-flex class="mr-1" xs1 xl1 lg1>
                           <a  target="blank" class="social-icons" href="https://instagram.com/larsgp">
                               <v-icon dark>mdi-instagram</v-icon>
                           </a>
                        </v-flex>
                        <v-flex class="mr-1" xs1 xl1 lg1>
                            <a  target="blank" class="social-icons" href="https://facebook.com">
                               <v-icon dark>mdi-facebook</v-icon>
                           </a>
                        </v-flex>
                        <v-flex class="mr-1" xs1 xl1 lg1>
                            <a  target="blank" class="social-icons" href="https://linkedin.com">
                               <v-icon dark>mdi-linkedin</v-icon>
                           </a>
                        </v-flex>
                    </v-layout>

                    <v-list-item class="mt-2 personal-info">
                        <v-list-item-icon >
                            <v-icon color="#FF8F00" class="mr-1" dark>mdi-email</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>larsgpx@gmail.com</v-list-item-title>                            
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item class="mt-1 personal-info">
                        <v-list-item-icon >
                            <v-icon color="#FF8F00" class="mr-1" dark>mdi-map-marker</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Calle ontario 191</v-list-item-title>
                            <v-list-item-subtitle>Chorrillos</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item class="mt-1 personal-info">
                        <v-list-item-icon >
                            <v-icon color="#FF8F00" class="mr-1" dark>mdi-phone</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>(+51) 955 549 584</v-list-item-title>
                            <!-- <v-list-item-subtitle>Personal</v-list-item-subtitle> -->
                        </v-list-item-content>
                    </v-list-item>
                </div>
           </v-flex>
       </v-layout>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .form-content{
        z-index: 10;
        position: relative;
    }
</style>