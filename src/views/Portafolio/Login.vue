<template>
  <div class="portfolio">
    <v-container class="grey lighten-5">
      <v-row justify="center"
      no-gutters>
        <v-col lg="5" xs="12" class="center-row">
          <p v-if="AuthUser">Usuario logueado</p>
          <v-form
        ref="form"                             
        class="form-style "
        id="contact-form"
        >
        <h1 class="">Debes loguearte para continuar</h1>
        <br>
          <v-text-field                        
              label="Usuario"
              outlined
              required
              v-model="user"
          ></v-text-field>

          <v-text-field                                          
              label="Contraseña"
              required
              outlined
              v-model="clave"
          ></v-text-field>                      

          <v-btn                         
              color="#FF8F00"                      
              class="mr-4 btn-form align-end"  
              v-on:click="login"  
              type="submit"     
              :loading="isLoading"
              :disabled="isLoading"               
          >
              Loguearse
          </v-btn>          
        </v-form>
        <br>
        <div class="text-center">
          <p>O logueate con tu cuenta de Google</p>
          <button><img width="50px" src="http://www.sclance.com/pngs/google-png/google_png_595849.png"></button>
        </div>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>
<script>
import Firebase, { storage } from 'firebase';
export default {
  data(){
    return{
      AuthUser : null
    }
  },
  created(){
    Firebase.auth().onAuthStateChanged(user => {this.AuthUser = user})
  }
}
</script>
<style lang="scss">
  .center-row{
    margin:0 auto;
    margin-top:15%;
  }
</style>