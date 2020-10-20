<template>
  <div :class="$style.root">
    <div :class="$style.child1">
      <div :class="$style.title">儿子组件</div>
      <div>{{ foot.name }}</div>
      <div :class="$style.click" @click="change">点击我，改变数据源</div>
    </div>
    <div><child2 /></div>
  </div>
</template>

<script>
import { foot,  footChangeFun } from "../symbol";
import Child2 from "./Child2";
export default {
  inject: {
    foot,
    footChangeFun,
  },
  components: {
    Child2,
  },
  mounted(){
      console.log(this)
  },
  methods: {
    change() {
      this.footChangeFun({
        from: "数据来源于儿子的改变",
        value: "child1-foot",
      });
    },
  },
};
</script>

<style lang="scss" module>
.root {
  .child1 {
    display: flex;
    color: #ffffff;
    margin-bottom: 20px;
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
}
</style>
