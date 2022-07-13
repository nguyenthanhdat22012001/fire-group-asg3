import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "@/middlewares/auth";
import noAuth from "@/middlewares/noAuth";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "*/",
    name: "product",
    component: () =>
      import(
        /* webpackChunkName: "product" */ "../modules/product/views/index.vue"
      ),
    meta: {
      middleware: [Auth],
    },
  },
  {
    path: "/user",
    name: "user",
    component: () =>
      import(/* webpackChunkName: "user" */ "../modules/user/views/index.vue"),
    meta: {
      middleware: [Auth],
    },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../modules/auth/views/login.vue"),
    meta: {
      layout: "auth",
      middleware: [noAuth],
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
      middleware: [noAuth],
    },
  },
];

const emptyFn = () => { }
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(
	location,
	onComplete = emptyFn,
	onAbort = emptyFn,
) {
	return originalPush.call(this, location, onComplete, onAbort)
}

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

    const payload = { to, from, next ,store,router};

    let prevent_next = false;

    for (let i = 0; i < middleware.length; i++) {
      const result = await middleware[i](payload);

      if (!result) {
        prevent_next = true;

        break;
      }
    }

    if (prevent_next) {
      return;
    }
  }
  next();
});

export default router;
