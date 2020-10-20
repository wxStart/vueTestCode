<template>
  <div id="app">
    <provide-inject @click-child="clickChild" />
  </div>
</template>

<script>
import ProvideInject from "./components/provide-inject/ProvideInject";

export default {
  name: "App",
  components: {
    ProvideInject,
  },
  methods: {
    clickChild(value) {
      console.log("value: ", value);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
