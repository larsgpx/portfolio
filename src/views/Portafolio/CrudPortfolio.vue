<template>
    <div>
        <h3>Agregar nuevo portafolio</h3>
        <br>
        <v-form
                ref="form"                             
                class="form-style"
                id="contact-form"
                @submit.prevent="addPort"
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
    </div>
</template>
<script>


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
            prueba: 'Pruebaaaa'          
        }
    },
    props:{
        list: Object,
        addPort: Function        
    }
 
}

</script>
