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
            <a :href="'#'+item.scroll"><v-list-item-title>{{ item.title }}</v-list-item-title></a>
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
        {title: 'Inicio', icon: 'mdi-view-dashboard',scroll:'home-banner'},
        {title: 'Sobre mí', icon: 'mdi-view-person_outline',scroll:'whoIam'},
        {title: 'Mi experiencia', icon: 'mdi-view-extension',scroll:'knowledge'},
        {title: 'Portafolio', icon: 'mdi-view-extension',scroll:'portfolio'}
      ],
      offsetTop: 0
   }
 },
 methods:{
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
    }
 }
}
</script>