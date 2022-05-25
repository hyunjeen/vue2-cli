<template>
  <div>
    <ul class="ask-list">
      <li
        v-for="(askitem, index) in GET_ASK"
        :key="index"
        class="post"
      >
        <div class="points">
          {{ askitem.points }}
        </div>
        <router-link
          :to="`/item/${askitem.id}`"
          class="user-profile"
        >
          <font-icon
            v-if="askitem.user"
            icon="fa-user fa-solid"
            size="sm"
          ></font-icon>
          <span class="user-name">{{ askitem.user }}</span>
        </router-link>
        <a
          :href="askitem.url"
          class="title"
        >{{ askitem.title }}</a>
        <span class="times">{{ askitem.time_ago }}</span>
      </li>
    </ul>
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

<style scoped>
.ask-list {
  margin: 0;
  padding: 0;   
}
.post {
  display: flex; 
  align-items: center;
  padding: 1.2rem 0.9rem;
  border-bottom: 1px solid #eee;  
}
.points {
  min-width: 50px;
  text-align: center;
  color: #42b883;
}

.user-profile {
  display: flex;
  align-items: center;
  min-width: 120px;
  margin-left: 10px;
  text-decoration: none;
  color: black;  
}
.user-profile:hover{
  color: #42b883;
}
.user-name{
  padding-left: 5px;
  
}
.title {
  margin-left: 10px;
  text-align: start;  
}
.times {
  margin-left: auto;
}
</style>