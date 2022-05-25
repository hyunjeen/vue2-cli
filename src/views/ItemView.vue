<template>
  <div>
    <section>
      <div class="user-container">
        <div><font-icon icon="fa-solid fa-user"></font-icon></div>
        <div class="user-description">
          <router-link :to="`/user/${iteminfo.user}`">
            {{ iteminfo.user }}
          </router-link>
          <div class="time">
            {{ iteminfo.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ iteminfo.title }}</h2>
    </section>
    <section>
      <div v-html="iteminfo.content">
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      iteminfo: 'GET_ITEM_INFO'}),    
  },
  created() {
    const id = this.$route.params.id;    
    this.$store.dispatch('FETCH_ITEM_INFO', id)
  }
}
</script>

<style scoped>
.user-container {
  display: flex;  
  align-items: center;
  padding: 2.5rem;
}
.fa-user {
  font-size: 3rem;
}
.user-description {
  padding-left: 8px;
  text-align: start;
}
.time {
  font-size: 0.9rem; 
}
</style>