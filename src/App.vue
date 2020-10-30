<template>
  <div id="app">
    <event-bus/>
  </div>
</template>

<script>
import EventBus from "./components/event-bus/EventBus";
export default {
  name: "App",
  components: {
    EventBus,
  },
  methods: {},
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
