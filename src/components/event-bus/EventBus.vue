<template>
  <div>
    <div :style="changeStyle">
      {{ text }}
    </div>
    <br />
    <div>第1个孩子</div>
    <child-com1 />
    <br />
    <div>第二个孩子</div>
    <child-com2 />
  </div>
</template>

<script>
import ChildCom1 from "./components/ChildCom1";
import ChildCom2 from "./components/ChildCom2";
export default {
  components: {
    ChildCom1,
    ChildCom2,
  },
  data() {
    return {
      text: "目前是初始的值",
      changeStyle: {},
    };
  },
  mounted() {
    this.$bus.$on("event1", this.change);
  },
  methods: {
    change(vaule) {
      this.text = `接收到第一个孩子传递来的数据《${vaule}》`;
      this.changeStyle = { "background-color": "gold", color: "#fff" };
    },
  },
};
</script>

<style lang="scss" moudle></style>
