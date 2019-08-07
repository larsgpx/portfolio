<template>
    <v-list-item class="v-list-space">
        <v-list-item-content class="name-exp">{{ title }}:</v-list-item-content>
        <v-list-item-content class="justify-start">
                <v-rating
                :value="rating"
                background-color="#455a64"
                color="#FF8F00"
                small
                readonly
                full-icon="mdi-checkbox-blank-circle"
                empty-icon="mdi-checkbox-blank-circle"
                ></v-rating>   
        </v-list-item-content>
</v-list-item>
</template>
<script>
export default {
    props:{
        title: String,
        rating: Number        
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
.v-list-space{
    padding-bottom: 5px;
    margin-bottom: -15px;
}
</style>
