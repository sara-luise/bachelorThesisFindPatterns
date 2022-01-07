<template>
  <div class="facet-view-layout">
    <div class="facet-view-layout building-blocks-border">
      <FacetLayout
        :item="facet"
        v-for="facet in buildingBlocksList"
        :key="facet"
      />
    </div>
    <div class="facet-view-layout search-task-border">
      <FacetLayoutSearchTask
        :item="facet"
        v-for="facet in searchTaskList"
        :key="facet"
      />
    </div>
    <div class="facet-view-layout data-border">
      <FacetLayout :item="facet" v-for="facet in dataList" :key="facet" />
    </div>
  </div>
</template>

<script>
import FacetLayout from "./FacetLayout";
import FacetLayoutSearchTask from "./FacetLayoutSearchTask";
export default {
  name: "FacetView",
  components: { FacetLayoutSearchTask, FacetLayout },
  data() {
    return {
      buildingBlocksList: [
        {
          imageName: "building blocks/text-element",
          description: "Text",
        },
        {
          imageName: "building blocks/rectangular-grid",
          description: "Rectangular",
        },
        {
          imageName: "building blocks/list-layout-structure",
          description: "List",
          line: true,
        },
        {
          imageName: "building blocks/tiles-layout-structure",
          description: "Tiles",
        },
      ],
      searchTaskList: ["Formulate", "Trace", "Analyze"],
      dataList: [
        {
          imageName: "data/nominal-attribute-type",
          description: "Nominal",
        },
        {
          imageName: "data/quanti-attribute-type",
          description: "Quantitative",
        },
        {
          imageName: "data/folksonomy-data-structure",
          description: "Folksonomy",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "src/mainStyles" as ms;
.facet-view-layout {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: fit-content;

  flex-wrap: wrap;
}

.building-blocks-border,
.search-task-border,
.data-border {
  border-top: 3px solid;
}

.building-blocks-border {
  border-image: linear-gradient(
      90deg,
      ms.$element-base-color,
      ms.$grid-base-color,
      ms.$layout-structure-base-color
    )
    10;
}

.search-task-border {
  border-top-color: ms.$search-task-base-color;
}

.data-border {
  border-image: linear-gradient(
      90deg,
      ms.$search-task-base-color,
      ms.$attribute-type-base-color,
      ms.$attribute-type-base-color,
      ms.$attribute-type-base-color,
      ms.$attribute-type-base-color,
      ms.$data-structure-base-color,
      ms.$data-structure-base-color,
      ms.$data-structure-base-color,
      ms.$data-structure-base-color
    )
    10;
}
</style>
