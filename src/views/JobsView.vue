<template>
  <div>
    <div
      v-for="(item, index) in GET_JOBS"
      :key="index"
    >
      <a :href="item.url">{{ item.title }}</a>
      <span>{{ item.domain }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["GET_JOBS"]),
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style>
</style>