<template>
  <div>
    <div>ChildCom2</div>
    <div>text-----:{{ text }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "text2",
    };
  },
  mounted() {
    this.$bus.$on("event1",this.event1);
  },
  methods: {
    event1(value) {
      console.log("ChildCom2value: ", value);
      this.text = value;
    },
  },
};
</script>

<style lang="scss" module></style>
