<template>
    <div>
      <v-list  class="bg-trans"        
        nav 
        rounded
      >        
      <v-divider></v-divider>                   
        <template v-if="this.$route.name === 'home'">
          <v-list-item
          v-for="item in home"
          :key="item.title"
          link
          >
      
          <v-list-item-content>
            <a :href="'#'+item.scroll"><v-list-item-title>{{ item.title }}</v-list-item-title></a>
          </v-list-item-content>
        </v-list-item>          
        </template>
        <template v-else-if="this.$route.name === 'portafolio'">
          <v-list-item
          v-for="item in portfolioAdmin"
          :key="item.title"
          link
          >
      
          <v-list-item-content>
            <a :href="item.link"><v-list-item-title>{{ item.title }}</v-list-item-title></a>
          </v-list-item-content>
        </v-list-item>          
        </template>        
      </v-list>
    </div>
</template>
<script>
export default {
 data(){
   return{
     home:[
        {title: 'Inicio', icon: 'mdi-view-dashboard',scroll:'home-banner'},
        {title: 'Sobre mí', icon: 'mdi-view-person_outline',scroll:'whoIam'},
        {title: 'Mi experiencia', icon: 'mdi-view-extension',scroll:'knowledge'},
        {title: 'Portafolio', icon: 'mdi-view-extension',scroll:'portfolio'}
      ],
      offsetTop: 0,
      portfolioAdmin:[        
        {title: 'Regresar al inicio', icon: 'mdi-chevron-left',link:'/'},
        // {title: 'Añadir proyecto', icon: 'mdi-view-person_outline',link:'whoIam'},
        // {title: 'Listar proyecto', icon: 'mdi-view-extension',link:'knowledge'},
        // {title: 'Portafolio', icon: 'mdi-view-extension',link:'portfolio'}        
      ]
   }
 },
 methods:{
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
    }
 }
}
</script>