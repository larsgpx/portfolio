<template>
  <div class="title">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'BaseTemplate',
  data () {
    return {
      msg: 'Pagina de inicio - Vue + webpack'
    }
  }
}
</script>
<style lang="scss" scoped>
.title{
  h1{
    color:green;
  }
}
</style>
