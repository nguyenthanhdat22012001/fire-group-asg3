import uerApi from "@/api/userApi";
import {deleteCookieHelper} from "@/helper/cookieHelper";

const state = {
  user: null,
};

const getters = {
  isLogged(state) {
    return state.user ? true : false;
  },
  getUser(state) {
    return state.user;
  },
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
};

const actions = {
  async fecthUserAction({ commit }) {
    /* eslint-disable */
    try {
      const res = await uerApi.fecthUser();
      if (res.status) {
        await commit("setUser", res.data);
      }
    } catch (e) {
      if(e.status != 401){
        throw e;
      }
    }
  },
  logoutAction({ commit }) {
    deleteCookieHelper("access_token");
    commit("setUser", null);
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
  namespaced: true,
};
