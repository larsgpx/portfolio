<template>    
        <v-footer
        
        class="font-weight-medium futer"
        >
            <v-flex
                text-center
                xs12
            >
                {{ new Date().getFullYear() }} — <strong>Larry G.</strong>
            </v-flex>
        </v-footer>  
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .futer{
        position: absolute;
        bottom: 0;
        width:100%;
    }
</style>