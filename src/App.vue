<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  name: "App",
  components: {
    ToolBar,
  },  
};
</script>

<style>

li {
  list-style-type: none;
}
a {
  color: #34495e;
  text-decoration: none;  
}
a:hover {
  color: #42b883;
  text-decoration: underline;
  
}
a.router-link-exact-active {
  text-decoration: underline;
}
/* we will explain what these classes do next! */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}

.page-enter-to,
.pages-leave-to {
  opacity: 0;
}
</style>
