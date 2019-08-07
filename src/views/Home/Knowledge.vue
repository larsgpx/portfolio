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
                    <p class="type-experience">PROGRAMACIÓN</p>
                    <v-list class="bg-trans" dense>
                        
                        <list-rating title="HTML5" :rating="5"></list-rating>
                        <list-rating title="CSS3" :rating="4"></list-rating>
                        <list-rating title="JAVASCRIPT" :rating="4"></list-rating>
                        <list-rating title="PHP" :rating="4"></list-rating>
                        <list-rating title="VUEJS 2" :rating="5"></list-rating>
                
                    </v-list>
                </div>  
                <div class="space-1"></div>
                <div class="range-experience">
                    <p class="type-experience">DISEÑO</p>
                    <v-list class="bg-trans" dense>
                        
                        <list-rating title="PHOTOSHOP" :rating="3"></list-rating>
                        <list-rating title="ILLUSTRATOR" :rating="2"></list-rating>
                        <list-rating title="ADOBE XD" :rating="3"></list-rating>
                        <list-rating title="AFTER EFFECTS" :rating="3"></list-rating>                        
                
                    </v-list>
                </div>      
                <div class="space-1"></div>
                <div class="range-experience">
                    <p class="type-experience">OTROS</p>
                    <v-list class="bg-trans" dense>
                        
                        <list-rating title="DISEÑO PROTOTIPOS" :rating="4"></list-rating>
                        <list-rating title="SEO" :rating="4"></list-rating>
                        <list-rating title="DISEÑO WEB" :rating="5"></list-rating>                                            
                
                    </v-list>
                </div>      
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import ListRating from './Rating.vue'
export default {
    data(){
        return{
            rating_3: 3,
            rating_4: 4,
            rating_5: 5
        }
    },
    components:{
        ListRating
    }
}
</script>
<style lang="scss" scoped>
.type-experience{
    text-align: left;
    padding-left: 10px;
    text-transform: uppercase;
}
.name-exp{
    color:#FF8F00;
    font-weight: 600;
    margin-right:-100%;
}
.experience-box{
    margin:10px;
    margin-bottom:45px;
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
