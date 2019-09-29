<template>
  <div id="app">
    <h1>My Vue Website</h1>
    <nav>
      <router-link exact :to="{name: 'home'}" :class="{'router-link-active':isHome}">Home</router-link>
      <span> | </span>
      <router-link :to="{name: 'book'}" :class="{'router-link-active':isBook}">Book</router-link>
      <span> | </span>
      <router-link :to="{name: 'about'}">About</router-link>
      <span> | </span>
      <router-link :to="{name: 'user'}">User</router-link>
    </nav>
    <hr>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      isHome:false,
      isBook:false
    }
  },
  watch:{
      $route(to, from) {
          this.isHome = /(^\/item\/\d*)|(^\/$)/.test(this.$route.path);
          this.isBook = /^\/book\w*/.test(this.$route.path)
      }
  }

}
</script>
<style>
#app{
  padding-bottom: 50px;
}
.router-link-active {
  color: red;
}

.fade-enter-active {
  transition: opacity 1.5s;
}
.fade-leave-active {
  transition: none;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
ul{
  margin: 0;
  padding: 0;
}
</style>
