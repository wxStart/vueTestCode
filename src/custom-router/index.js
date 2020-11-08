let Vue;

class CustomRouter {
  constructor(option) {
    this.$options = option;

    // 路由映射
    this.routeMaps = {};

    // 响应式的，变化后才会跟着依赖变化
    this.app = new Vue({
      data: {
        currentHash: "/",
      },
    });
  }
  init() {
    //声明router的组件
    this.createComponents();
    // 绑定hash变化监听事件
    this.bindEvent();
    // 解析路由
    this.createRouteMap();
  }

  createComponents() {
    // 创建 router-link 组件   to属性 <router-link to="/">
    Vue.component("router-link", {
      props: {
        to: {
          type: String,
          required: true,
        },
      },
      render() {
        return <a href={`#${this.to}`}>{this.$slots.default}</a>;
      },
    });

    // 创建router-view 组件   这个组件是根据当前的hash返回定义好的组件
    Vue.component("router-view", {
      render: (h) => {
        // 根据当前的
        const component = this.routeMaps[this.app.currentHash].component;
        return h(component);
      },
    });
  }

  bindEvent() {
    window.addEventListener("hashchange", () => this.onHashChange());
  }

  onHashChange() {
    this.app.currentHash = window.location.hash.slice(1) || "/";
    console.log("this.app.currentHash: ", this.app.currentHash);
  }

  createRouteMap() {
    this.$options.routes.forEach((route) => {
      this.routeMaps[route.path] = route;
    });
  }
}

// Vue的插件都是有一个instal方法  参数是vue实例的构造函数
CustomRouter.install = function (_vue) {
  Vue = _vue;

  Vue.mixin({
    beforeCreate() {
      console.log("this.$options: ", this);

      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
        this.$options.router.init();
      }
    },
  });
};

export default CustomRouter;
