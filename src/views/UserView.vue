<template>
  <div>
    <p>name: {{ userinfo.id }}</p>
    <p>created: {{ userinfo.created }}</p>
    <p>karma: {{ userinfo.karma }}</p>
  </div>
</template>
 
<script>
import { mapGetters } from 'vuex'
// import axios from 'axios'
export default {
  computed: {
    ...mapGetters({
      userinfo : 'GET_USER_INFO'
    })
  },
  created() {    
    const userName = this.$route.params.id
    this.$store.dispatch('FETCH_USER_INFO', userName)
  }
}
</script>

<style>

</style>