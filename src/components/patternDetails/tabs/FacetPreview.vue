<template>
  <div class="facet-preview-layout">
    <FacetLayout
      :item="facet"
      v-for="facet in $root.$data.brickService.getSpecificFacetsOfGroups(
        facetItems,
        ['element', 'grid', 'layout-structure']
      )"
      :key="facet.uid"
      :after-facets-divider="afterFacetsDivider"
      :in-main-facets="mainFacetsContainFacet(mainFacets, facet)"
    />
    <FacetLayoutSearchTask
      :item="facet"
      v-for="facet in $root.$data.brickService.getSpecificFacetsOfGroups(
        facetItems,
        ['searchTask']
      )"
      :key="facet.uid"
      :in-main-facets="mainFacetsContainFacet(mainFacets, facet)"
    />
    <FacetLayout
      :item="facet"
      v-for="facet in $root.$data.brickService.getSpecificFacetsOfGroups(
        facetItems,
        ['attribute-type', 'data-structure']
      )"
      :key="facet.uid"
      :in-main-facets="mainFacetsContainFacet(mainFacets, facet)"
    />
  </div>
</template>

<script>
import FacetLayout from "../constructionKitView/FacetLayout";
import FacetLayoutSearchTask from "../constructionKitView/FacetLayoutSearchTask";

export default {
  name: "FacetPreview",
  components: { FacetLayoutSearchTask, FacetLayout },
  props: ["mainFacets", "facetItems", "afterFacetsDivider"],
  methods: {
    mainFacetsContainFacet(mainFacets, item) {
      return mainFacets.includes(item.uid);
    },
  },
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
