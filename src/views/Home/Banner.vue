<template>
    <v-parallax class="banner-lg" dark :src="require('@/assets/'+image+'')">
        <v-layout
            align-left
            column
            justify-center
        >
            <div class="banner-letters">
                <h2 class="subheading">Larry García</h2>
                <h1 class="display-2 font-weight-thin mb-4">DESARROLLADOR FRONT-END</h1>                
            </div>
        </v-layout>
    </v-parallax>
</template>
<script>
export default {    
    props:{
        image:String
    }
}
</script>
<style lang="scss">
.banner-lg{
    height:800px;
}
@media screen and (max-width: 600px) {
 .banner-lg{
    height:400px;
}   
}
</style>