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
  height: 50rem;
  h1 {
    color: #af0707;
    font-size: 20rem;
    height: 20rem;
    align-self: center;
    margin: 0;
    padding-top: 8rem;
  }
  h2 {
    font-size: 10rem;
    padding-top: 5rem;
    margin: 0;
    height: 20rem;
  }
}
</style>
