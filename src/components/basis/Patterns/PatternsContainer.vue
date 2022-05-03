<template>
  <div class="patters-container">
    <PatternPreview
      v-for="pattern in patterns"
      :pattern="pattern"
      :key="pattern.uid"
    />
  </div>
</template>

<script>
import PatternPreview from "./PatternPreview";
export default {
  name: "PatternsContainer",
  components: { PatternPreview },
  props: ["patterns"],
};
</script>

<style lang="scss" scoped>
@use "../../../mainStyles" as ms;

.patters-container {
  background: linear-gradient(
    200deg,
    ms.$background-element-base-color 0%,
    ms.$background-grid-base-color 20%,
    ms.$background-layout-structure-base-color 30%,
    ms.$background-search-task-base-color 50%,
    ms.$background-attribute-type-base-color 70%,
    ms.$background-data-structure-base-color 100%
  );
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  padding: 1%;
  align-content: flex-start;
}
</style>
