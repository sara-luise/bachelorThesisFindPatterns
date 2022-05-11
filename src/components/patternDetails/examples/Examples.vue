<template>
  <div class="examples-layout">
    <p class="headline">Examples</p>
    <div v-if="patternExample.length > 0" class="example-link-layout">
      <a v-for="example in patternExample" :key="example" :href="example">{{
        example
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Examples",
  props: ["patternExample"],
};
</script>

<style lang="scss" scoped>
@use "src/mainStyles" as ms;
.examples-layout {
  width: 100%;
  margin: 1rem 0;
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
