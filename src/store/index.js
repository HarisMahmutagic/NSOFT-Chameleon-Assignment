import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    UserName: "",
    EmailAddress: "",
    RememberUser: false,
    LogedIn: false,
  },

  mutations: {
    setEmailAddress: (state, EmailAddress) =>
      (state.EmailAddress = EmailAddress),
    setUserName: (state, UserName) => (state.UserName = UserName),
    setRememberUser: (state, RememberUser) =>
      (state.RememberUser = RememberUser),
    setLogedIn: (state, LogedIn) => (state.LogedIn = LogedIn),
  },

  actions: {
    fetchEmailAddress({ commit }, emailAddress) {
      commit("setEmailAddress", emailAddress);
    },

    fetchUserName({ commit }, userName) {
      commit("setUserName", userName);
    },

    fetchRememberUser({ commit }, rememberUser) {
      commit("setRememberUser", rememberUser);
    },

    fetchLogedIn({ commit }, logedIn) {
      commit("setLogedIn", logedIn);
    },
  },

  getters: {
    EmailAddress: (state) => state.EmailAddress,
    UserName: (state) => state.UserName,
    RememberUser: (state) => state.RememberUser,
    LogedIn: (state) => state.LogedIn,
  },
});
