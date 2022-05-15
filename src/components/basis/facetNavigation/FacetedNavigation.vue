<template>
  <div class="facet-bar">
    <md-button class="deselect-btn" @click="deselectFacets()">
      <div class="format-deselect-btn">
        <img
          :src="require('@/assets/deselect_frame.png')"
          alt="deselect icon"
        />
        <p>Deselect</p>
      </div>
    </md-button>
    <div class="faceted-nav-div full-control">
      <div class="list">
        <FacetCategory
          :category-items-list="facets.buildingBlocksList"
          :add-selected-facet="addSelectedFacet"
          :remove-facet="removeFacet"
        />
        <FacetCategorySmall
          :category-items-list="facets.searchTaskList"
          :add-selected-facet="addSelectedFacet"
          :remove-facet="removeFacet"
        />
        <FacetCategory
          :category-items-list="facets.dataList"
          :add-selected-facet="addSelectedFacet"
          :remove-facet="removeFacet"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "../../../basicVueMaterialImports";
import FacetCategory from "./FacetCategory";
import "../../../mainStyles.scss";
import FacetCategorySmall from "./FacetCategorySmall";

export default {
  name: "FacetedNavigation",
  components: { FacetCategorySmall, FacetCategory },
  props: ["facets", "addSelectedFacet", "removeFacet"],
  methods: {
    deselectFacets: function () {
      this.$props.facets.buildingBlocksList[1].forEach((group) => {
        group.elements.forEach((element) => {
          element.chosen = false;
          this.$props.removeFacet(element);
        });
      });

      this.$props.facets.searchTaskList[1].forEach((element) => {
        element.chosen = false;
        this.$props.removeFacet(element);
      });

      this.$props.facets.dataList[1].forEach((group) => {
        group.elements.forEach((element) => {
          element.chosen = false;
          this.$props.removeFacet(element);
        });
      });
    },
  },
};
</script>

<style lang="scss">
@use "../../../mainStyles" as ms;

.faceted-nav-div {
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0;
  height: 90vh;
  overflow-y: scroll;
}

.facet-bar {
  position: relative;
  box-shadow: 5px 0 5px -2px #ededed;
}

.format-deselect-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  z-index: 4;
  background: white;

  img {
    background: linear-gradient(
      to right,
      ms.$element-base-color,
      ms.$grid-base-color,
      ms.$layout-structure-base-color,
      ms.$search-task-base-color,
      ms.$data-structure-base-color,
      ms.$attribute-type-base-color
    );
    height: 30px;
    margin-right: 5px;
  }
}

.md-button .md-ripple {
  padding: 0;
}

.md-button-content {
  margin-right: 0;
}

.deselect-btn {
  position: absolute;
  bottom: 20px;
  right: 10px;
  box-shadow: #bbbbbb 0 5px 15px;
  background: white;

  &:hover {
    box-shadow: #9f9f9f 0 10px 20px;
  }
}

.full-control {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.full-control > .md-list {
  max-width: 100%;
  display: inline-block;
  overflow: auto;
  border: 1px solid rgba(#000, 0.12);
  vertical-align: top;
}

.control {
  min-width: 250px;
  display: flex;
  flex-direction: column;
  padding: 16px;
}
</style>
