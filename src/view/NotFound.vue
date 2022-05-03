<template>
  <div class="error-page">
    <h1>404</h1>
    <h2>page not found</h2>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped lang="scss">
.error-page {
  margin: 5rem;
  h1 {
    color: #af0707;
    font-size: 20rem;
    margin: 0;
  }
  h2 {
    font-size: 10rem;
    margin: 0;
  }
}
</style>
