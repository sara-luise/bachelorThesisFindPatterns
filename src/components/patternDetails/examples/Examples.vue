<template>
  <div class="examples-layout">
    <p class="headline">Examples</p>
    <div class="example-link-layout">
      <a href="http://visual-search.org/">visual-search.org</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Examples",
};
</script>

<style lang="scss" scoped>
@use "src/mainStyles" as ms;
.examples-layout {
  width: 100%;
  margin: 1% 3% 3% 3%;
}

.example-link-layout {
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
}

.headline {
  font-weight: bold;
}
</style>
