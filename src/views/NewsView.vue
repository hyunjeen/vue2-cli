
<template>
  <div>
    <ul class="news-list">
      <li
        v-for="(news, index) in GET_NEWS"
        :key="index"
        class="post"
      >
        <div class="points">
          {{ news.points }}
        </div>
        <router-link
          :to="`/user/${news.user}`"
          class="user-profile"
        >
          <font-icon
            v-if="news.user"
            icon="fa-user fa-solid"
            size="sm"
          ></font-icon>          
          <span class="user-name">{{ news.user }}</span>
        </router-link>
        <a
          :href="news.url"
          class="title"
        >{{ news.title }}</a>
        <span class="times">{{ news.time_ago }}</span>
      </li>
    </ul>
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
  
<style scoped>
.news-list {
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