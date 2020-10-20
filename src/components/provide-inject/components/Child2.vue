<template>
  <div :class="$style.root">
    <div :class="$style.title">孙子组件</div>
    <div>{{ foot.name }}</div>
    <div :class="$style.click" @click="change">点击我，改变数据源</div>
  </div>
</template>

<script>
import { foot, footChangeFun } from "../symbol";
export default {
  inject: {
    foot,
    footChangeFun,
  },
  methods: {
    change() {
      this.footChangeFun({
        from: "数据来源于孙子的改变",
        value: "child2-foot",
      });
    },
  },
};
</script>

<style lang="scss" module>
.root {
  display: flex;
  color: #ffffff;
  > div {
    background: gray;
    margin-left: 10px;
  }
  .title {
    background: red;
  }
  .click {
    background: gold;
  }
}
</style>
