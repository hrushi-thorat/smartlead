import { createStore } from "vuex";

export default createStore({
  state: {
    users: [
      { username: "user1", password: "password1" },
      { username: "user2", password: "password2" },
    ],
    campaigns: [
      {
        id: 1,
        title: "SW Zero Personalisation 1",
        status: "sent",
        seq: "3",
        completed: 30,
        reports: [
          {
            value: "520",
            title: "sent",
          },
          {
            value: "39",
            title: "Clicked",
            per: "19.6%",
            color: "#EEB728",
          },
          {
            value: "202",
            title: "Opened",
            per: "32.6%",
            color: "#BF51C1",
          },
          {
            value: "4",
            title: "Replied",
            per: "32.6%",
            color: "#51C1C1",
          },
          {
            value: "0",
            title: "Positive Reply",
            per: "0.0%",
            color: "#2CDB28",
          },
        ],
      },
      {
        id: 2,
        title: "Untitled Campaign",
        status: "draft",
        seq: "4",
        completed: 0,
        reports: [
          {
            value: "0",
            color: "#999BA8",
            title: "sent",
          },
          {
            value: "0",
            title: "Clicked",
            per: "0%",
            color: "#999BA8",
          },
          {
            value: "0",
            title: "Opened",
            per: "0%",
            color: "#999BA8",
          },
          {
            value: "0",
            title: "Replied",
            per: "0%",
            color: "#999BA8",
          },
          {
            value: "0",
            title: "Positive Reply",
            per: "0.0%",
            color: "#999BA8",
          },
        ],
      },
      {
        id: 3,
        title: "Feb Campaign",
        status: "stopped",
        seq: "3",
        completed: 30,
        reports: [
          {
            value: "540",
            title: "sent",
          },
          {
            value: "41",
            title: "Clicked",
            per: "19.6%",
            color: "#EEB728",
          },
          {
            value: "204",
            title: "Opened",
            per: "32.6%",
            color: "#BF51C1",
          },
          {
            value: "6",
            title: "Replied",
            per: "32.6%",
            color: "#51C1C1",
          },
          {
            value: "3",
            title: "Positive Reply",
            per: "0.0%",
            color: "#2CDB28",
          },
        ],
      },
      {
        id: 4,
        title: "All the Best",
        status: "paused",
        seq: "3",
        completed: 30,
        reports: [
          {
            value: "550",
            title: "sent",
          },
          {
            value: "43",
            title: "Clicked",
            per: "19.6%",
            color: "#EEB728",
          },
          {
            value: "205",
            title: "Opened",
            per: "32.6%",
            color: "#BF51C1",
          },
          {
            value: "8",
            title: "Replied",
            per: "32.6%",
            color: "#51C1C1",
          },
          {
            value: "6",
            title: "Positive Reply",
            per: "0.0%",
            color: "#2CDB28",
          },
        ],
      },
    ],
    filteredCampaigns: [],
    currentUser: null,
  },
  mutations: {
    login(state, user) {
      state.currentUser = user;
    },
    logout(state) {
      state.currentUser = null;
    },
    updateFilteredCampaigns(state, filteredCampaigns) {
      state.filteredCampaigns = filteredCampaigns;
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
    searchCampaigns({ state, commit }, searchQuery) {
      if (!searchQuery) {
        // If the search query is not present, return all campaigns
        commit("updateFilteredCampaigns", state.campaigns);
      } else {
        const filteredCampaigns = state.campaigns.filter((campaign) =>
          campaign.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        commit("updateFilteredCampaigns", filteredCampaigns);
      }
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.currentUser,
    getCurrentUser: (state) => state.currentUser,
    getCampaigns: (state) => state.filteredCampaigns,
  },
});
