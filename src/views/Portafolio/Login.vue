<template>
  <div class="portfolio">
    <v-container class="grey lighten-5">
      <v-row justify="center"
      no-gutters>
        <v-col lg="5" xs="12" class="center-row">
          
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
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>
<style lang="scss">
  .center-row{
    margin:0 auto;
    margin-top:15%;
  }
</style>