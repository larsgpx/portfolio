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
                    
                    <vue-pikaday class="pikaday-input"
                        :options="pikadayOptions"
                        v-model="newProyect.fecha"
                        placeholder="Elige una fecha"
                    />                                                         
                 
                    <v-text-field                                                        
                            label="Tipo de proyecto"
                            required
                            outlined
                            v-model="newProyect.type"
                    ></v-text-field>
              
                    <v-file-input @change="onFileSelected" placeholder="Elige tu imagen" v-model="files" outlined label="File input" prepend-icon="mdi-clippy" dark></v-file-input>
                    <template>
                        <div>
                            <img :src="this.picture" width="100%" alt="">
                        </div>  
                    </template>
                    <v-text-field                            
                            label="Descripción"
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
import Vue from "vue";
import * as moment from 'moment';
import VuePikaday from '@enrian/vue-pikaday';
import '@enrian/vue-pikaday/dist/vue-pikaday.min.css';
Vue.use(VuePikaday);

export default {  
    data(){
        return{                          
            now: null,
            pikadayOptions: {                
                format: 'DD/MM/YYYY'               
            },
            newProyect:{
                name:'',
                fecha: '',
                type:'',
                description:'',
                url:'',
                date:''
            },
            selectedFile: null,
            UploadValue: 0,
            picture:null
                     
        }
    },  
    props:{
        list: Object,
        addPort: Function   
    },
    methods: {            
        getHumanDate : function (date) {
            return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
        }      
    }
 
}

</script>
<style lang="scss">
    .pikaday-input{
        border: 1px solid #757575;
        width: 100%;
        margin-top: -5px;
        margin-bottom: 25px;        
        border-radius: 3px;
        height: 50px;
        color:white;
        padding: 10px;
    }
    .hide{
        display: none;
    }
    ::-webkit-input-placeholder { /* Edge */
    color: white;
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: white;
    }

    ::placeholder {
    color: white;
    }
</style>