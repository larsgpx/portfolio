<template>
   <v-container>
        <v-layout column align-center>           
            <v-window
            v-model="window"
            class="elevation-1"
            :vertical="vertical"
            :show-arrows="showArrows"        
            dark    
            >
            <v-window-item
                v-for="n in length"
                :key="n"
            >
                <v-card
                    class="mx-auto"                    
                    outlined
                >
                    <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">OVERLINE</div>
                        <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                    ></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                    <v-btn text>Button</v-btn>
                    <v-btn text>Button</v-btn>
                    </v-card-actions>
                </v-card>
            </v-window-item>
            </v-window>
        </v-layout>
   </v-container>
</template>
<script>
   export default {
    data: () => ({
      length: 3,
      window: 0,
      showArrows: true,     
      autorun: true
    }),

    created () {
      setInterval(() => {
        if (!this.autorun) return
        if (++this.window >= this.length) this.window = 0
      }, 3000)
    },
  }
  </script>