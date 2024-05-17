import { defineStore } from "pinia";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";

export const useAppStore = defineStore("storeId", {
  state: () => ({
    bootstrap,
  }),
});


export const useStore = defineStore({
  id: 'main',
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    login(user) {
      this.isAuthenticated = true
      this.user = user
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
    },
  },
})