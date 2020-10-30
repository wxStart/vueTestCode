<template>
  <div>
    <button @click="onClick">向父组件和兄弟组件通讯</button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$bus.$emit("event1", "数据来源于ChildCom1");
    },
  },
};
</script>

<style lang="scss" module></style>
