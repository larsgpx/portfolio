<template>
    <v-simple-table dark>
        <thead>
            <tr>
                <th class="text-left">Imagen</th>
                <th class="text-left">Cliente</th>
                <th class="text-left">Fecha realizado</th>
                <th class="text-left">Tipo proyecto</th>
                <th class="text-left">Descripcion</th>
                <th class="text-left">url</th>
                <th class="text-left">Acción</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in listado" :key="item['.key']">
                <td class="img-project"><img :src="item.img" ></td>
                <td>{{ item.name }}</td>
                <td>{{ item.fecha | moment }} </td>
                <td>{{ item.type }}</td>
                <td>{{ item.description | truncate}}</td>
                <td><a class="url-web" :href="item.url" target="_blank">{{ item.url }} </a></td>
                <td @click.stop="dialog = true"><span class="X">X</span></td>
                 <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card dark>
        <v-card-title class="headline">Estas seguro?</v-card-title>

        <v-card-text>
          La información sera eliminada de aqui y de la base de datos. asi que mosca.
        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1"></div>

          <v-btn
            color="blue"
            text
            @click="dialog = false"
          >
            No quiero
          </v-btn>

          <v-btn
            color="#F44336"
            text
            @click="deletePort(item.id); dialog = false"
          >
            Eliminar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
            </tr>
           
        </tbody>       
    </v-simple-table>
</template>
<script>
import * as moment from 'moment';
export default {
    data(){
      return{
          dialog: false
      }  
    },
    props:{
        deletePort: Function,
        listado: Array
    },
    methods: {
        moment: function () {
            return moment();
        },
        areYouSure(item){
            this.dialog = true;
            return this.deletePort(item);
        }
    },
    filters: {
        moment: function (date) {
            return moment(String(date)).format('DD/MM/YYYY');
        },
        truncate: function(value) {
            if (value.length > 30) {
                value = value.substring(0, 27) + '...';
            }
            return value
        }
    }    
}
</script>
<style lang="scss">
    .img-project{
        img{
            width:100%;
        }
    }
    .url-web{
        color:#FF8F00;
        &:hover{
            color:#FF8F70;
        }
    }
    .X{
        background-color:red;
        color:white;
        cursor: pointer;
        border-radius: 100%;
        padding:5px 10px;
        font-weight: 600;
        box-shadow: 0px 0px 10px -2px #333333;
        transition: all .5s;
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        &:hover{
            box-shadow: 0px 0px 10px 0px black;
        }
    }
    .fileInput{
        &::-ms-browse {
        background: black;
        color: red;
        padding: 1em;
        }
    }
</style>