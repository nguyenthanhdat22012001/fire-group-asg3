import store from "@/store/index";


export default async function ({ next }) {
  let isAuthenticated = true;
  // console.log("111", store.getters["auth/isLogged"]);

  if (!store.getters["auth/isLogged"]) {
    await store.dispatch("auth/fecthUserAction");
    isAuthenticated = store.getters["auth/isLogged"];
  }
  // console.log("222", store.getters["auth/isLogged"]);
  // console.log("333", isAuthenticated);
  // let isAuthenticated
  if (!isAuthenticated) {
    next({ name: "login" });
    return false;
  }
  return true;
}
