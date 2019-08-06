<template>
    <v-container>
        <div class="info-text">
            <h4 class="text-left">Mi Experiencía</h4>                    
        </div>
        <div row>
            <div class="experience-box">
                <p class="experience-grade">Universitario</p>
                <div class="experience-location">
                    <h5>Gran mariscal de Ayacucho</h5>
                    <p>Ingeniero en informatica</p>
                    <p>2010-2015</p>
                </div>
            </div>
        </div>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.experience-box{
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
            text-align:right;
            color:white;
            font-size:15px;
        }
    }
}
</style>
