<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view> 
    </transition>  
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  name: 'App',  
  components: {
    ToolBar,    
  },
  created() {
    const parent = this.$parent
    console.log(parent.$options.FontAwesomeImport)
  }
}
</script>

<style>
#app {
  text-align: center;
}
/* we will explain what these classes do next! */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ;
}

.page-enter-to,
.pages-leave-to {
  opacity: 0;
}
</style>
