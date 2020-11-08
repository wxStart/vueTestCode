import Vue from "vue";
import CustomRouter from "../custom-router/index";

import Index from "../components/Index.vue";
import Other from "../components/Other.vue";
Vue.use(CustomRouter);

export default new CustomRouter({
  routes: [
    {
      path: "/",
      component: Index,
    },
    {
      path: "/other",
      component: Other,
    },
  ],
});
