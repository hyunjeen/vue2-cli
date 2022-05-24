<template>
  <div>
    <div
      v-for="(askitem, index) in GET_ASK"
      :key="index"
    >
      <!-- <a :href="askitem.url">{{ askitem.title }}</a> -->
      <router-link :to="`/item/${askitem.id}`">
        {{ askitem.user }}
      </router-link>
      {{ askitem.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['GET_ASK'])
  }, 
  created() {
    this.$store.dispatch('FETCH_ASK')
  },
}
</script>

<style>

</style>