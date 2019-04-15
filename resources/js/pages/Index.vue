<template>
  <div class="index">
    首页
  </div>
</template>

<script>
  export default {
    mounted() {
      axios({
        method:"post",
        url:"/api/me",
        // data:{"action":"refreshToken"},
        headers:{
          "Authorization":"Bearer " + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU1NTMxNTk1MiwiZXhwIjoxNTU1MzE2MDEyLCJuYmYiOjE1NTUzMTU5NTIsImp0aSI6ImdiSUk4eUgwYmhRY1k1UTAiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.1QmaxH-MG8i25fI52nVx0HjgcPWGRU3mACtw_bK7EmM'
        }
      })
    }
  }
</script>
