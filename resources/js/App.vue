<template>
  <div class="app">
    <div>
      <router-link to="/signup">sign up</router-link>
      <router-link to="/signin">sign in</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('Component mounted.11');
    }
  }
</script>
