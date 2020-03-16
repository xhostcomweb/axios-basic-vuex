<template>
  <div id="app">
    <v-layout mt-12 mb-12 justify-center align-center>
      <v-flex xs6 mt-12 mb-12>
        <v-text-field
          v-model="search"
          autofocus
          @keyup.enter="searchData($event)"
          label="Enter Artists Name"
          append-icon="search"
        ></v-text-field>
      </v-flex>
    </v-layout>
   <h2 v-for="(item, index) in posts" :key="index">
      {{ item.title }}
    </h2>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("loadPosts");
  },
  computed: {
    ...mapState(["posts"])
  },
  components: {}
};
</script>

