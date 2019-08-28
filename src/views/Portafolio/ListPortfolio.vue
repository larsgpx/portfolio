<template>
    <v-simple-table dark>
        <thead>
            <tr>
                <th class="text-left">Cliente</th>
                <th class="text-left">Fecha realizado</th>
                <th class="text-left">Tipo proyecto</th>
                <th class="text-left">Descripcion</th>
                <th class="text-left">url</th>
                <th class="text-left">Acción</th>
            </tr>
        </thead>
        <tbody>
            <!-- <tr v-for="(item,index) in portafolios" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.fecha }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.description }}</td>
                <td><a :href="item.url" target="_blank">{{ item.url }} </a></td>
                <td @click="deletePortfolio">X</td>
            </tr> -->
           
        </tbody>
    </v-simple-table>
</template>
<script>
export default {

}
</script>