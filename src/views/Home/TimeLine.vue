<template>
    <v-container>
        <div class="info-text">
            <h4 class="text-left">¿Donde he trabajado?</h4>                    
        </div>
        <div class="space-2"></div>
        <v-timeline>
        <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small
        >
        <template v-slot:opposite>
            <span
            class="headline font-weight-bold"
            v-text="year.year"
            ></span>
        </template>
        <v-card class="elevation-2">
            <v-card-title class="headline">Lorem ipsum</v-card-title>
            <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
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
          year: '1960',
        },
        {
          color: '#00e5ff',
          year: '1970',
        },
        {
          color: '#455a64',
          year: '1980',
        },
        {
          color: '#FF8F00',
          year: '1990',
        },
        {
          color: '#40ba64',
          year: '2000',
        },
      ],
    }),
  }
</script>