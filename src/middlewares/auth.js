// import store from "@/store/index";


export default async function ({ next, store }) {
  let isAuthenticated = true;
  if (!store.getters["auth/isLogged"]) {
    await store.dispatch("auth/fecthUserAction");
    isAuthenticated = store.getters["auth/isLogged"];
  }
  if (!isAuthenticated) {
    next({ name: "login" });
    return false;
  }
  return true;
}
