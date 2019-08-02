<template>
  <div class="hello">
    <h1>{{ msg }}</h1> 
    <h2>{{ test }}</h2>       
    <test></test>  
  </div>
</template>

<script>
import Test from '@/components/Test.vue';
export default {  
  props: {
    msg: String,
    test: String
  },
  components:{    
    Test   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p{
  color:red;
}
</style>
