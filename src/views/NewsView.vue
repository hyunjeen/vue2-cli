<template>
  <div>
    <div
      v-for="news in newslist"
      :key="news"
    >
      {{ news.title }}
    </div>
  </div>
</template>

<script>
import { fetchNewsList} from '../api/index.js'
export default {
  data() {
    return {
      newslist: null
    }
  },
  created() {
    fetchNewsList()
    .then(res => this.newslist = res.data)
    .catch(e => console.log(e))
  }
}
</script>
 
<style>

</style>