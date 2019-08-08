<template>
    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
        <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
        ></v-text-field>

        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>        
       

        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
        >
            Enviar
        </v-btn>
        
    </v-form>
</template>
<script>
export default {
    
}
</script>