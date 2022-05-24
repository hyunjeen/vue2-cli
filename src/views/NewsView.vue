
<template>
  <div>
    <div
      v-for="(news, index) in GET_NEWS"
      :key="index"
    >
      <router-link :to="`/user/${news.user}`">
        {{ news.user }}
      </router-link>
      <a :href="news.url">{{ news.title }}</a>
      <span>news.time_ago</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["GET_NEWS"]),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>
 
<style>
</style>