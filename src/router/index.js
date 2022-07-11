import Vue from "vue";
import VueRouter from "vue-router";
// import Auth from "@/middlewares/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "*/",
    name: "product",
    component: () =>
      import(
        /* webpackChunkName: "product" */ "../modules/product/views/index.vue"
      ),
    // meta: {
    //   middleware: [Auth],
    // },
  },
  {
    path: "/user",
    name: "user",
    component: () =>
      import(/* webpackChunkName: "user" */ "../modules/user/views/index.vue"),
    // meta: {
    //   middleware: [Auth],
    // },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../modules/auth/views/login.vue"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../modules/auth/views/register.vue"
      ),
    meta: {
      layout: "auth",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function () {
    // arg: to, from, savedPosition
    return { x: 0, y: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.middleware) {
    const middleware = to.meta.middleware;

    const payload = { to, from, next };

    let preventNext = false;

    for (let i = 0; i < middleware.length; i++) {
      const result = await middleware[i](payload);

      if (!result) {
        preventNext = true;

        break;
      }
    }

    if (preventNext) {
      return;
    }
  }

  next();
});

export default router;
