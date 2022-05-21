<template>
  <div>
    <div
      v-for="(askitem, index) in askitems"
      :key="index"
    >
      {{ askitem.title }}
    </div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'
export default {
  data() {
    return {
      askitems: null 
    }
  },
  created() {
    fetchAskList()
      .then(res => this.askitems = res.data)
  },
}
</script>

<style>

</style>