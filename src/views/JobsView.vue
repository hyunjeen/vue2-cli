<template>
  <div>
    <ul class="jobs-list">
      <li
        v-for="(job, index) in GET_JOBS"
        :key="index"
        class="post"
      >
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <div class="content-wrap">
          <a
            :href="job.url"
            class="title"
            target="_blank"
          >{{ job.title }}</a>
          <div class="etc">
            <span class="times">{{ job.time_ago }}</span>
            <a
              :href="job.url"
              class="domain"
            >by {{ job.domain }}</a>
          </div>
        </div>
      </li>
    </ul>
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
.jobs-list {
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
.content-wrap {
  margin-left: 10px;
}
.user-profile {
  display: flex;
  align-items: center;
  min-width: 120px;
  
  text-decoration: none;
  color: black;
}
.user-profile:hover {
  color: #42b883;
}
.user-name {
  padding-left: 5px;
}
.title {
  text-align: start;
}

.domain {  
  margin-left: 10px;
  color: #c7c7c7;
}
.etc {
  display: flex;
}
</style>