<template>
    <v-container>
        <div class="info-text">
            <h4 class="text-left">¿Donde he trabajado?</h4>                    
        </div>
        <div class="space-2"></div>
        <v-timeline :dense="isMobile() ? true:false">
        <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small        
        :right="isMobile() ? true:false"
        >
        <template v-slot:icon>
        <v-avatar>
          <img :src="require('../../../img/'+year.avatar)">
        </v-avatar>
      </template>
        <template v-slot:opposite>
            <span
            class="headline font-weight-bold"
            v-text="year.year"
            ></span>
        </template>
        <v-card class="elevation-2">
            <v-card-title class="headline">{{year.title}}</v-card-title>
            <v-card-text>
            <p class="text-left list-style" v-html="year.descripcion"></p>
            </v-card-text>
        </v-card>      
        </v-timeline-item>
  </v-timeline>
  <div class="space-1 space-bg">
      <div class="abstract-bg-right"></div>
  </div>
    </v-container>
</template>
<script>
export default {
    data: () => ({
      years: [
        {
          color: '#42b983',
          year: '2019',
          title: 'Wunderman Thompson',
          descripcion:'Programador Front-end en el area de movistar con Full REST API,Grunt/Gulp y pre procesadores (Pug, Stylus, Sass)',
          avatar: 'wunderman-logo.jpg'
        },
        {
          color: '#00e5ff',
          year: '2019',
          title: 'Fabrik perú',
          descripcion:`<ul>
                          <li>Desarrollo de paginas web responsiva y  administrables con PHP, Pre procesador Sass, Bootstrap 4, Javascript, Jquery, Laravel y VUEJS 2.</li>
                          <li>Sistemas web SPA con Vuejs + Laravel optimizadas con consumo de web services (SOAP/REST).</li>
                          <li>Paginas web empresariales desarrolladas en Wordpress y prestashop.</li>
                          <li>Optimizacion SEO y administracion SEM.</li>
                      </ul>`,
          avatar: 'fabrik.png'
        },
         {
          color: '#455a64',
          year: '2019',
          title: 'Brandteam - (Freelance)',
          descripcion:`<ul>
                        <li>Desarrollo de paginas web responsiva y  administrables con PHP, Pre procesador Sass, Bootstrap 4, Javascript, Jquery y VUEJS 2.</li>
                        <li>Pagina web administrable para instituo financiero líder en el sector de microfinanzas CONFIANZA.PE. </li>
                        <li> Pagina web administrable al 100% para web interna de Brandteam.</li>
                        <li> Pagina web de presentacion de empresa + blog empresarial con wordpress.</li>
                      </ul>`,
          avatar: 'brandteam.jpg'
        },
        {
          color: '#455a64',
          year: '2017',
          title: 'ASES Digitales',
          descripcion:`<ul>
                      <li> Desarrollo de paginas web responsiva y  administrables con Laravel, Pre procesador Sass, Bootstrap 4, Javascript, Jquery.</li>
                      <li>Pagina web administrable para empresa de cacao originpartner.com.pe</li>
                      <li> Pagina web administrable al 100% con modulos de pago CULQI.</li>
                      </ul>`,
          avatar: 'ases.png'
        },
        {
          color: '#FF8F00',
          year: '2017',
          title: 'JSJ Consultores Informaticos S.A.C.',
          descripcion:'Desarrollo de aplicación web con PHP, Ajax, Javascript, Jquery para facturador electrónico con todas las validaciones requeridas por la SUNAT.',
          avatar: 'jsj.jpg'
        },
        {
          color: '#40ba64',
          year: '2016',
          title: 'Facilcloud',
          descripcion:`
                        <ul>
                            <li>Manejo de privilegios y configuracion de S.O (Linux y Windows).</li>
                            <li>Automatización de procesos y tareas bajo Scripts Bash y PowerShell en servidores. </li>
                            <li>Manejo y optimización de SEO en sitios web. </li>
                            <li>Optimizar el proceso de desarrollo para poder reducir los tiempos de paso a producción, de entrega al cliente.</li>
                        </ul>`,
          avatar: 'facilcloud.png'
        },
      ],
    }),
    methods:{
      isMobile(){
        if( navigator.userAgent.match(/Android/i)
          || navigator.userAgent.match(/webOS/i)
          || navigator.userAgent.match(/iPhone/i)
          || navigator.userAgent.match(/iPad/i)
          || navigator.userAgent.match(/iPod/i)
          || navigator.userAgent.match(/BlackBerry/i)
          || navigator.userAgent.match(/Windows Phone/i)
          ){
              return true;
            }
          else {
              return false;
          }
      }
    }
  }
</script>
<style lang="scss">
  .list-style{
    li{
      list-style:none;
    }
  }
</style>