<template>
    <v-container>      
        <div class="info-text">
                    <h4 class="text-left">Mi Experiencía</h4>                    
        </div>
        <div class="space-1"></div>
        <v-layout wrap>
                
            <v-flex xs4>                                
                <h6 class="second-title">Estudios</h6>
                <div class="experience-box">
                    <p class="experience-grade">Universitario</p>
                    <div class="experience-location">
                        <h5>Gran mariscal de Ayacucho</h5>
                        <p>Ingeniero en informatica</p>
                        <p>2010-2015</p>
                    </div>
                </div>

                <div class="experience-box">
                    <p class="experience-grade">Curso Online</p>
                    <div class="experience-location">
                        <h5>Udemy</h5>
                        <p>Vuejs 2 + Vuex from scratch</p>
                        <p>2018</p>
                    </div>
                </div>

                <div class="experience-box">
                    <p class="experience-grade">Curso Online</p>
                    <div class="experience-location">
                        <h5>Udemy</h5>
                        <p>Python + Django</p>
                        <p>2019</p>
                    </div>
                </div>
            </v-flex>
            <v-flex xs2></v-flex>
            <v-flex xs4>  
                <h6 class="second-title">Mis habilidades</h6>
                <div class="range-experience">
                    <p class="type-experience">Programación</p>
                    <v-list class="bg-trans" dense>
                <v-list-item>
                  <v-list-item-content class="name-exp">HTML5:</v-list-item-content>
                  <v-list-item-content class="align-end">test</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content class="name-exp">CSS3:</v-list-item-content>
                  <v-list-item-content class="align-end">test</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content class="name-exp">JAVASCRIPT:</v-list-item-content>
                  <v-list-item-content class="align-end">test</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content class="name-exp">PYTHON:</v-list-item-content>
                  <v-list-item-content class="align-end">test</v-list-item-content>
                </v-list-item>

                
              </v-list>
                </div>      
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.experience-box{
    margin:10px;
    margin-bottom:15px;
    border-left:2px solid #FF8F00;
    padding-left: 15px;
    .experience-grade{
        text-align: left;
        font-size:14px;

    }
    .experience-location{
        h5{
            text-align:right;
            color:#FF8F00;
            font-size:18px;
        }
        p{
            width:100%;
            line-height: 30px;
            text-align:right;
            color:white;
            font-size:15px;
        }
    }
}

.second-title{
    font-size:20px;
    text-transform: uppercase;    
    text-align: left;
    padding-bottom: 5%;
    padding-left: 10px;
}
</style>
