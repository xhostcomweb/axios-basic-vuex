<template>
  <div id="app">
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
