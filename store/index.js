import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    loadPosts({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(data => {
          console.log(data.data);
          let posts = data.data;
          commit("SET_POSTS", posts);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  modules: {}
});
