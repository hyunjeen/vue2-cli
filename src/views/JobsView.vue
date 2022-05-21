<template>
  <div>
    <div
      v-for="(item, index) in jobs"
      :key="index"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index.js";
export default {
  data() {
    return {
      jobs: null,
    };
  },
  created() {
    fetchJobsList()
      .then( res => this.jobs = res.data )
      .catch((e) => console.log(e));
  },
};
</script>

<style>
</style>