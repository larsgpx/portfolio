<template>
  <div id="app">
    <div>      
        <input type="text"
        v-model="newReptile"
        @keyup.enter="addReptile">
         <br>
      <!-- <v-file-input @change="onFileSelected" placeholder="Elige tu imagen" outlined label="File input" prepend-icon="mdi-clippy"></v-file-input> -->
      <input type="file" @change="onFileSelected">
      <img :src="this.picture" width="320">
      <br>
      <button  @click="addReptile">
        Add Reptile
      </button>
    </div>    
    <ul class="reptileList">
      <li v-for="reptile in reptiles" :key="reptile.id">
          {{ reptile.name }} - <img :src="reptile.img" width="100px">
          <button @click="deleteReptile(reptile.id)">
            Remove
          </button>
      </li>
    </ul>
  </div>
</template>

<script>  
import firebase from 'firebase';
  import { db } from '../Firestore';  
  export default {
    name: 'app',
    data() {
      return {
        reptiles: [],
        newReptile: '',
        testRep: '',
        selectedFile: null,
        UploadValue: 0,
        picture:null,
        FullUrlImg:''   
      }
    },
    firestore() {
      return {
        reptiles: db.collection('larsgpx123'),
      }
    },
    methods: {
      addReptile: function() {
        this.onUpload();
        this.$firestore.reptiles.add(
          {
            name: this.newReptile,            
            img: this.FullUrlImg,
            timestamp: new Date()
          }
        );
        this.newReptile = '';                
      },
      deleteReptile: function(reptile) {
        this.$firestore.reptiles.doc(reptile).delete();
      },
      onFileSelected(event){
            console.log('onFileSelected: '+event.target.files[0].name)
            this.selectedFile = event.target.files[0]
        },
      onUpload(){
          const storageRef = firebase.storage().ref(`/imgPortfolio/${this.selectedFile.name}`);
          const task = storageRef.put(this.selectedFile);
          task.on('state_changed',snapshot=>{
            let percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            this.UploadValue = percentage;
          }, error=>{console.log(error.message)},
          ()=>{
              //downloadUrl - para mostrar la imagen q se acaba de subir con todo y ruta
              task.snapshot.ref.getDownloadURL().then((url)=>{                
                this.picture = url;
                self.FullUrlImg = url;
                console.log('picture: '+ url);                    
              })
          });
      },
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
    color: black;
  }
  button{
    background-color:green;
    padding: 5px 10px;
    border-radius: 5px;
    margin:3px;

  }
</style>