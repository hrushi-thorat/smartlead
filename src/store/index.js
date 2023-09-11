import { createStore } from "vuex";

export default createStore({
  state: {
    users: [
      { username: "user1", password: "password1" },
      { username: "user2", password: "password2" },
    ],
    currentUser: null,
  },
  mutations: {
    login(state, user) {
      state.currentUser = user;
    },
    logout(state) {
      state.currentUser = null;
    },
  },
  actions: {
    loginUser({ commit, state }, { username, password }) {
      const user = state.users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        commit("login", user);
        localStorage.setItem("currentUser", JSON.stringify(user));
        return true;
      }
      return false;
    },
    logoutUser({ commit }) {
      commit("logout");
      localStorage.removeItem("currentUser");
    },
    checkAuth({ commit }) {
      const user = localStorage.getItem("currentUser");
      if (user) {
        commit("login", JSON.parse(user));
      }
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.currentUser,
  },
});
