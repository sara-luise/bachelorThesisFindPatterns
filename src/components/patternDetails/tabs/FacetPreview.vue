<template>
  <div class="facet-preview-layout">
    <FacetLayout
      :item="facet"
      v-for="facet in facetItems.buildingBlocksList"
      :key="facet"
    />
    <FacetLayoutSearchTask
      :item="facet"
      v-for="facet in facetItems.searchTaskList"
      :key="facet"
    />
    <FacetLayout :item="facet" v-for="facet in facetItems.dataList" :key="facet" />
  </div>
</template>

<script>
import FacetLayout from "../constructionKitView/FacetLayout";
import FacetLayoutSearchTask from "../constructionKitView/FacetLayoutSearchTask";
export default {
  name: "FacetPreview",
  components: { FacetLayoutSearchTask, FacetLayout },
  props: ['facetItems'],
  };
</script>

<style lang="scss" scoped>
@use "src/mainStyles" as ms;
.facet-preview-layout {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: fit-content;
  margin-left: 3%;
  flex-wrap: wrap;
}
</style>
