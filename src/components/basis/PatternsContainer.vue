<template>
  <div class="patters-container">

  </div>
</template>

<script>
export default {
  name: "PatternsContainer",
};
</script>

<style lang="scss" scoped>
@use "../../mainStyles" as ms;
.patters-container {
  background: linear-gradient(
    200deg,
    ms.$background-element-base-color 0%,
    ms.$background-grid-base-color 30%,
    ms.$background-layout-structure-base-color 50%,
    ms.$background-search-task-base-color 60%,
    ms.$background-attribute-type-base-color 80%,
    ms.$background-data-structure-base-color 100%
  );
  overflow: scroll;
}
</style>
