<template>
    <v-container grid-list-xl>
       <v-layout wrap>
           <v-flex lg5 xs12 xl5>
                <v-form
                ref="form"
                v-model="valid"                
                class="form-style"
                >
                    <v-text-field
                        v-model="name"
                        label="Nombre Completo"
                        outlined
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        outlined
                    ></v-text-field>  

                    <v-text-field
                            v-model="subject"
                            :rules="nameRules"
                            label="Tema"
                            required
                            outlined
                    ></v-text-field>        
                    <v-text-field
                            v-model="message"
                            :rules="emailRules"
                            label="Mensaje"
                            required
                            outlined
                    ></v-text-field>   

                    <v-btn                         
                        color="#FF8F00"                      
                        class="mr-4 btn-form align-end"
                        @click="validate"
                    >
                        Enviar
                    </v-btn>
                    
                </v-form>
           </v-flex>
       </v-layout>
    </v-container>
</template>
<script>
export default {
    
}
</script>