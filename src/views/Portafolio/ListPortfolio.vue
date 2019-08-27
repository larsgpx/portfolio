<template>
    <v-simple-table dark>
        <thead>
            <tr>
                <th class="text-left">Cliente</th>
                <th class="text-left">Fecha realizado</th>
                <th class="text-left">Tipo proyecto</th>
                <th class="text-left">Descripcion</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in portfolio" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.fecha }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.description }}</td>
            </tr>
        </tbody>
    </v-simple-table>
</template>
<script>
export default {
    data(){
        return{
            item:{
                name: 'test',
                fecha: 'fecha',
                type: 'Tipo proyecto',
                description: 'lorem ipsum dolor mother apsan fucker'
            }
        }
    }
}
</script>