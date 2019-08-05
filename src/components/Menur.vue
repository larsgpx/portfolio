<template>
    <div>
      <v-list  class="bg-trans"        
        nav 
        rounded
      >        
      <v-divider></v-divider>                   
        <v-list-item
          v-for="item in home"
          :key="item.title"
          link
        >
          <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
</template>
<script>
export default {
 data(){
   return{
     home:[
        {title: 'Inicio', icon: 'mdi-view-dashboard'},
        {title: 'Sobre mí', icon: 'mdi-view-person_outline'},
        {title: 'Mi experiencia', icon: 'mdi-view-extension'},
        {title: 'Conocimientos', icon: 'mdi-view-extension'}
      ]  
   }
 }
}
</script>