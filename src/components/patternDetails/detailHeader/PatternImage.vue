<template>
  <div class="pattern-card">
    <img
      :src="require('@/assets/patterns/' + patternImage + '.png')"
      alt="pattern image"
    />
  </div>
</template>

<script>
export default {
  name: "PatternImage",
  props: ["patternImage", "patternName"],
};
</script>

<style lang="scss" scoped>
.pattern-card {
  width: 100%;
  border: gray solid 0.1rem;
  border-radius: 0.1rem;
}

img {
  width: 100%;
}
</style>
