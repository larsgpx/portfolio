<template>
    <div>
        <h3>Agregar nuevo portafolio</h3>
        <br>
        <v-form
                ref="form"                             
                class="form-style"
                id="contact-form"
                @submit.prevent="addPortfolio"
                >
                    <v-text-field                        
                        label="Nombre Proyecto"
                        outlined
                        required
                        v-model="newProyect.name"
                    ></v-text-field>

                    <v-text-field                                          
                        label="Fecha de creacion"
                        required
                        outlined
                        v-model="newProyect.fecha"
                    ></v-text-field>  

                    <v-text-field                                                        
                            label="Tipo de proyecto"
                            required
                            outlined
                            v-model="newProyect.type"
                    ></v-text-field>        
                    <v-text-field                            
                            label="Descripcion"
                            required
                            outlined
                            v-model="newProyect.description"
                    ></v-text-field>  
                    <v-text-field                            
                            label="url"                            
                            outlined
                            v-model="newProyect.url"
                    ></v-text-field>    

                    <v-btn                         
                        color="#FF8F00"                      
                        class="mr-4 btn-form align-end"                          
                        type="submit"                                     
                    >
                        Subir
                    </v-btn>
                    
                </v-form>            

                <table class="table table-striped">
                <thead>
                    <tr>
                    <th>name</th>
                    <th>type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(p,index) in portafolios" :key="index">
                        <td><a v-bind:href="p.url">{{p.name}}</a></td>
                        <td>{{p.type}}</td>
                        <!-- <p style="color:white"><button @click="deletePortfolio(port)">eliminar</button> </p> -->
                    </tr>
                </tbody>
                </table>
    </div>
</template>
<script>
import Firebase from 'firebase';
import config from '../../config';
let app = Firebase.initializeApp(config);
let db = app.database();
let FirebaseRef = db.ref('portafolios');

export default {  
    data(){
        return{               
            newProyect:{
                name:'',
                fecha:'',
                type:'',
                description:'',
                url:'',
            },         
            portafolios: []    
        }
    },
    firebase: function(){
        return{
            portafolios:db.ref('portafolios') // portafolios es el nombre de referencia que se usara para llamar un array con V-for por ejemplo, con eso estare llamando el arreglo portafolios
        }
    },  
    methods:{
        addPortfolio(){                        
            FirebaseRef.push(this.newProyect);            
            this.newProyect.name = '';
            this.newProyect.fecha = '';
            this.newProyect.type = '';
            this.newProyect.description = '';
            this.newProyect.url = '';            
        },
        deletePortfolio(portafolios){
            FirebaseRef.child(portafolios['.key']).remove();
        }
    }
}

</script>
