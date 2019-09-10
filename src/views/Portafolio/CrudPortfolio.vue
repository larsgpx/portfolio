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
              
                    <!-- <v-file-input class="fileInput" @change="onFileSelected" placeholder="Elige tu imagen" outlined label="File input" prepend-icon="mdi-clippy"></v-file-input>                     -->
                    <input type="file" @change="onFileSelected" class="fileInput">
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
                img: '',
                name:'',
                fecha: '',
                type:'',
                description:'',
                url:'',
                date:''
            },
            selectedFile: null,
            UploadValue: 0,            
                     
        }
    },  
    props:{
        list: Object,
        addPort: Function        
    },
    methods: {            
        getHumanDate : function (date) {
            return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
        },
        onFileSelected(event){
            // this.$emit('on-file-selected', event)             
            if(typeof event !== 'undefined'){            
                console.log('selectFile name:'+event.target.files[0].name);
                return this.selectedFile = event.target.files[0];                
            }else{
                console.log('onfileSelected, algo paso');
            }
            
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

    ::placeholder,.mdi-clippy::before {
    color: white;
    }
    .theme--light.v-file-input .v-file-input__text{
        color: white;
    }
    .fileInput{
    height: 50px;
    border: 1px solid #696161;
    border-radius: 5px;
    margin: 0 auto;
    padding: 10px;
    width: 100%;
    margin: 0px 0px 20px 0px;
    }
</style>