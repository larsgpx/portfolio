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
            <tr v-for="item in listado" :key="item['.key']">
                <td>{{ item.name }}</td>
                <td>{{ item.fecha }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.description }}</td>
                <td><a :href="item.url" target="_blank">{{ item.url }} </a></td>
                <td @click="deletePort(item.id)">X</td>
            </tr>
           
        </tbody>
    </v-simple-table>
</template>
<script>
export default {
    props:{
        deletePort: Function,
        listado: Array
    }
}
</script>