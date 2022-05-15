<template>
  <div class="facets-layout">
    <div class="facet-list facet-list-building-blocks">
      <div class="facet-view-layout building-blocks">
        <FacetLayout
          :item="facet"
          v-for="facet in getList(pattern.facets, [
            'layout-structure',
            'grid',
            'element',
          ])"
          :key="facet.uid"
          :after-facets-divider="pattern.facetDividers"
        />
      </div>
    </div>
    <div class="facet-list facet-list-search-task">
      <div class="facet-view-layout search-task">
        <FacetLayoutSearchTask
          :item="facet"
          v-for="facet in getList(pattern.facets, ['searchTask'])"
          :key="facet.uid"
        />
      </div>
    </div>
    <div class="facet-list facet-list-data">
      <div class="facet-view-layout data">
        <FacetLayout
          :item="facet"
          v-for="facet in getList(pattern.facets, [
            'attribute-type',
            'data-structure',
          ])"
          :key="facet.uid"
          :after-facets-divider="pattern.facetDividers"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FacetLayout from "./FacetLayout";
import FacetLayoutSearchTask from "./FacetLayoutSearchTask";

export default {
  name: "FacetView",
  components: { FacetLayoutSearchTask, FacetLayout },
  props: ["pattern"],
  methods: {
    getList(facets, groups) {
      return this.$root.$data.brickService.getSpecificFacetsOfGroups(
        facets,
        groups
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@use "src/mainStyles" as ms;

.facets-layout {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.facet-list {
  display: flex;
  width: 100%;

  &-building-blocks {
    justify-content: flex-end;
  }

  &-search-task {
    justify-content: center;
    margin: 1rem 0;
  }

  &-data {
    justify-content: flex-start;
  }
}

.facet-view-layout {
  display: flex;
  flex-direction: row;

  width: fit-content;
}

.building-blocks,
.search-task,
.data {
  width: fit-content;
  border-top: 3px solid;
}

.building-blocks {
  border-image: linear-gradient(
      90deg,
      ms.$layout-structure-base-color,
      ms.$grid-base-color,
      ms.$element-base-color
    )
    10;
}

.search-task {
  border-top-color: ms.$search-task-base-color;
}

.data {
  border-image: linear-gradient(
      90deg,
      ms.$data-structure-base-color,
      ms.$attribute-type-base-color
    )
    10;
}
</style>
