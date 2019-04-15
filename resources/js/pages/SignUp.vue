<template>
  <div class="sign-up">
    <form @submit="handleSubmit">
      phone：
      <input type="text" v-model="phone">
      <br>
      <br>
      name：
      <input type="text" v-model="name">
      <br>
      <br>
      password:
      <input type="password" v-model="password">
      <br>
      <br>
      <input type="submit" value="注册">
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        phone: '',
        name: '',
        password: ''
      }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        const info = {
          phone: this.phone,
          name: this.name,
          password: this.password
        };
        axios.post('/api/signup', info)
          .then(res => {
            console.log(res);
          })
      }
    }
  }
</script>

