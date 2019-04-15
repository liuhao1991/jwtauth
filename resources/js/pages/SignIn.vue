<template>
  <div class="sign-up">
    <form @submit="handleSubmit">
      phone：
      <input type="text" v-model="phone">
      <br>
      <br>
      password:
      <input type="password" v-model="password">
      <br>
      <br>
      <input type="submit" value="登录">
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        phone: '',
        password: ''
      }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        const info = {
          phone: this.phone,
          password: this.password
        };
        axios.post('/api/login', info)
          .then(res => {
            console.log(res);
          })
      }
    }
  }
</script>
