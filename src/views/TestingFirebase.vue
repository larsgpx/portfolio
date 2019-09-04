<template>
  <div id="app">
    <div>
      <input type="text"
        v-model="newReptile"
        @keyup.enter="addReptile">
        <input type="text"
        v-model="newReptile"
        @keyup.enter="addReptile">
      <button  @click="addReptile">
        Add Reptile
      </button>
    </div>
    <ul class="reptileList">
      <li v-for="reptile in reptiles" :key="reptile.id">
          {{ reptile.name }} -
          <button @click="deleteReptile(reptile.id)">
            Remove
          </button>
      </li>
    </ul>
  </div>
</template>

<script>  
  import { db } from '../Firestore';  
  export default {
    name: 'app',
    data() {
      return {
        reptiles: [],
        newReptile: '',
        testRep: ''
      }
    },
    firestore() {
      return {
        reptiles: db.collection('larsgpx123'),
      }
    },
    methods: {
      addReptile: function() {
        this.$firestore.reptiles.add(
          {
            name: this.newReptile,
            test: this.testRep,
            timestamp: new Date()
          }
        );
        this.newReptile = '';
        this.testRep = '';
      },
      deleteReptile: function(reptile) {
        this.$firestore.reptiles.doc(reptile).delete();
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    margin-top: 60px;
  }
  .reptileList {
    list-style: none;
  }
  input{
    background-color: white;
  }
</style>