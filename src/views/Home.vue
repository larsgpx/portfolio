<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Vue + webpack" />
    <p>tre</p>
  </div>
</template>

<script>
// @ es un alias para /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
