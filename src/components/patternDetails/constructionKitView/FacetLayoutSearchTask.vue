<template>
  <div class="facet-layout">
    <div class="brackets-white-space"></div>
    <div class="layout" v-bind:class="{ 'in-main-facets': inMainFacets }">
      <p>{{ item.name }}</p>
    </div>
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
  position: relative;
}

.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 0.5rem;
}

.brackets-white-space {
  position: absolute;
  height: 100%;
  background: white;
  z-index: 50;
  width: calc(100% - 0.7rem);
}

.in-main-facets {
  border-radius: 0.1rem;
  border: gray solid 2px;
}

p {
  overflow: initial;
  color: ms.$search-task-base-color;
  font-weight: bold;
  font-size: x-large;
  margin: 0;
  z-index: 100;
}
</style>
