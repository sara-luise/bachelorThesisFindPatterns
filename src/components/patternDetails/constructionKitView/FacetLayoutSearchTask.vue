<template>
  <div class="facet-layout">
    <p>{{ item}}</p>
  </div>
</template>

<script>
export default {
  name: "FacetLayoutSearchTask",
  props: ["item"]
};
</script>

<style lang="scss" scoped>
@use "../../../mainStyles" as ms;

.facet-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 14px 3px 0 3px;
}

p {
  overflow: initial;
  color: ms.$search-task-base-color;
  font-weight: bold;
  font-size: x-large;
  margin: 0 10px;
}

</style>