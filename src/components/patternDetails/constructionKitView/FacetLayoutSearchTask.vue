<template>
  <div class="facet-layout">
    <p>{{ item.name }}</p>
  </div>
</template>

<script>
export default {
  name: "FacetLayoutSearchTask",
  props: ["item", "inMainFacets"],
};
</script>

<style lang="scss" scoped>
@use "../../../mainStyles" as ms;

.facet-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 14px 0.5rem;
}

p {
  overflow: initial;
  color: ms.$search-task-base-color;
  font-weight: bold;
  font-size: x-large;
  margin: 0;
}
</style>
