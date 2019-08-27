<template>
    <v-simple-table dark>
        <thead>
            <tr>
                <th class="text-left">Cliente</th>
                <th class="text-left">Fecha realizado</th>
                <th class="text-left">Tipo proyecto</th>
                <th class="text-left">Descripcion</th>
                <th class="text-left">url</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in portfolio" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.fecha }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.url }}</td>
            </tr>
        </tbody>
    </v-simple-table>
</template>
<script>
// import Firebase from 'firebase';
// import config from '../../config';
// let app = Firebase.initializeApp(config);
// let db = app.database();
// let websiteRef = db.ref('websites');
export default {
    // firebase:{
    // websites:websiteRef
  
    data(){
        return{
            item:{
                name: 'test',
                fecha: 'fecha',
                type: 'Tipo proyecto',
                description: 'lorem ipsum dolor mother apsan fucker'
            },            
            // newWebsite:{
            //     name:'',
            //     fecha:'',
            //     type:'',
            //     description:'',
            //     url:'',
            // }
        }
    }
}
</script>