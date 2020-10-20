<template>
  <div :class="$style.root">
    <div :class="$style.Child1">
      <child1 />
    </div>
    <div :class="$style.from">{{ from }}-{{ foot.name }}</div>
  </div>
</template>

<script>
import { foot, footChangeFun } from "./symbol";
import Child1 from "./components/Child1";
export default {
  provide() {
    return {
      [foot]: this.foot,
      [footChangeFun]: this.footChangeFun,
    };
  },
  components: {
    Child1,
  },
  data() {
    return {
      foot: {
        name: "init-foot",
      },
      from: "数据来源 init",
    };
  },
  methods: {
    footChangeFun({ from, value }) {
      this.foot.name = value;
      this.from = from;
      this.$emit("click-child", { ...this.foot });
    },
  },
};
</script>

<style lang="scss" module>
.root {
  .Child1 {
    margin-bottom: 40px;
  }
  .from {
  }
}
</style>
