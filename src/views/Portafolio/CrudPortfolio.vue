<template>
    <div>
        <h3>Agregar nuevo portafolio</h3>
        <br>
        <v-form
                ref="form"                             
                class="form-style"
                id="contact-form"
                >
                    <v-text-field                        
                        label="Nombre Completo"
                        outlined
                        required
                        v-model="name"
                    ></v-text-field>

                    <v-text-field                                          
                        label="E-mail"
                        required
                        outlined
                        v-model="email"
                    ></v-text-field>  

                    <v-text-field                                                        
                            label="Tema"
                            required
                            outlined
                            v-model="tema"
                    ></v-text-field>        
                    <v-text-field                            
                            label="Mensaje"
                            required
                            outlined
                            v-model="message"
                    ></v-text-field>   

                    <v-btn                         
                        color="#FF8F00"                      
                        class="mr-4 btn-form align-end"  
                        v-on:click="submit"  
                        type="submit"     
                        :loading="isLoading"
                        :disabled="isLoading"               
                    >
                        Enviar
                    </v-btn>
                    
                </v-form>
    </div>
</template>
<script>
import Firebase from 'firebase';
import config from '../../config';
let app = Firebase.initializeApp(config);
let db = app.database();
let websiteRef = db.ref('websites');
export default {
    firebase:{
    websites:websiteRef
  },  
    data(){
        return{
            item:{
                name: 'test',
                fecha: 'fecha',
                type: 'Tipo proyecto',
                description: 'lorem ipsum dolor mother apsan fucker'
            },
            current: '',
            newWebsite:{
                name:'',
                fecha:'',
                type:'',
                description:'',
                url:'',
            }
        }
    }
}
</script>