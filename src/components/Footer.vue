<template>
    <v-card height="150">
        <v-footer padless
        absolute
        class="font-weight-medium"
        >
            <v-flex
                text-center
                xs12
            >
                {{ new Date().getFullYear() }} — <strong>Larry G.</strong>
            </v-flex>
        </v-footer>
  </v-card>
</template>
<script>
export default {
    
}
</script>