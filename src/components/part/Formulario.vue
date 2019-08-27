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
           </v-flex>
           <v-flex lg4 xs13 xl3 class="mt-3">
               <div class="space-1 hidden-desktop-only"></div>
               <div class="info-text ml-1">                    
                    <h6 class="sub-text-left mt-3 ml-1">Redes Sociales</h6>
                    <v-layout align-content-center justify-start mt-1 ml-2 class="social-media">
                        <v-flex class="mr-1" xs2 xl1 lg1>
                           <a  target="blank" class="social-icons" href="https://instagram.com/larsgp">
                               <v-icon dark>mdi-instagram</v-icon>
                           </a>
                        </v-flex>
                        <v-flex class="mr-1" xs2 xl1 lg1>
                            <a  target="blank" class="social-icons" href="https://www.facebook.com/larryjoel.garciaparedes">
                               <v-icon dark>mdi-facebook</v-icon>
                           </a>
                        </v-flex>
                        <v-flex class="mr-1" xs2 xl1 lg1>
                            <a  target="blank" class="social-icons" href="https://www.linkedin.com/in/larry-garcia-818646aa/">
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
     name: 'contact',
  data () {
    return {
      title: 'Contact',
      viewName: 'Formulario',     
      user_recieved: 'Larry García',            
      name: null,
      email: null,      
      tema: null,
      message: null,
      formSubmitted: false,
      isLoading: false,
      formInvalid: false      
    }
  },
  mounted () {
    this.$nextTick(function () {
      let emailJSscript = document.createElement('script')
      emailJSscript.setAttribute('src', 'https://cdn.emailjs.com/sdk/2.2.4/email.min.js')
      document.head.appendChild(emailJSscript)
    })
  },
  methods: {
    submit () {
      event.preventDefault();
      if (this.email !== null && this.name !== null && this.message !== null && this.tema !== null) {
        this.formInvalid = false
        this.isLoading = true
        this.formSubmitted = false
        emailjs.init('user_iAgRF2glgHlNxr3J9UDzJ')
        this.contact_number = Math.random() * 100000 | 0
        emailjs.send(
          'default_service',
          'template_0ZLF0sQ8',
          {email: this.email, name: this.name, message: this.message, tema: this.tema, user_recieved: this.user_recieved}
        ).then((response) => {
          this.formSubmitted = true
          this.isLoading = false
          console.log('Excelente! tu correo ha sido enviado!', response)
        }, (error) => {
          console.log('Error! Algo ha sucedido y no pudo enviarse el correo', error)
          this.isLoading = false
        })
      } else {
        console.log('error');
      }
    }
  }
}
</script>
<style lang="scss">
    .form-content{
        z-index: 10;
        position: relative;
    }
</style>