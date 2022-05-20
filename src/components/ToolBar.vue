<template>
  <div class="header">
    <ul>
      <li>
        <router-link to="/news">news</router-link>
      </li>
      <li>
        <router-link to="/jobs">jobs</router-link>
      </li>
      <li>
        <router-link to="/ask">ask</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  display: flex;
  margin: 0;
  background-color: #42b883;
}
li {
  display: flex;  
  list-style-type: none;
}
a {
  text-transform: uppercase;
  display: flex;
  align-items: center;
  color: white;
  padding: 10px; 
  box-sizing: border-box; 
  min-height: 50px;
  text-decoration: none;
}
a.router-link-exact-active {
  color: #35449e;
}
</style>