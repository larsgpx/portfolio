<template>
    <div>
        <ul>
            <li>{{ menu.home }}</li>
            <li>{{ menu.about }}</li>
            <li>{{ menu.contact }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            menu:{
                home:'Pagina de inicio',
                about: 'About',
                contact: 'Contáctanos'
            }
        }
    }
}
</script>