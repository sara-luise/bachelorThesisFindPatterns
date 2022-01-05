<template>
  <div class="facet-bar">
    <md-button class="deselect-btn">
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
        <FacetCategory :category-items-list="buildingBlocksList" />
        <FacetCategorySmall :category-items-list="searchTaskList" />
        <FacetCategory :category-items-list="dataList" />
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
  data() {
    return {
      buildingBlocksList: [
        {
          name: "Building Blocks",
        },
        [
          {
            header: "Elements",
            color: "#2e1f71",
            elements: [
              {
                imageName: "building blocks/text-element",
                description: "Text",
                chosen: false,
              },
              {
                imageName: "building blocks/image-element",
                description: "Image",
                chosen: false,
              },
              {
                imageName: "building blocks/point-element",
                description: "Point",
                chosen: false,
              },
              {
                imageName: "building blocks/icon-element",
                description: "Icon",
                chosen: false,
              },
              {
                imageName: "building blocks/glyph-element",
                description: "Glyph",
                chosen: false,
              },
              {
                imageName: "building blocks/line-element",
                description: "Line",
                chosen: false,
              },
              {
                imageName: "building blocks/area-element",
                description: "Area",
                chosen: false,
              },
              {
                imageName: "building blocks/flow-element",
                description: "Flow",
                chosen: false,
              },
            ],
          },
          {
            header: "Grid",
            color: "#9489d0",
            elements: [
              {
                imageName: "building blocks/rectangular-grid",
                description: "Rectangular",
                chosen: false,
              },
              {
                imageName: "building blocks/radial-grid",
                description: "Radial",
                chosen: false,
              },
              {
                imageName: "building blocks/triangular-grid",
                description: "Triangular",
                chosen: false,
              },
              {
                imageName: "building blocks/free-form-grid",
                description: "Free form",
                chosen: false,
              },
            ],
          },
          {
            header: "Layout Structure",
            color: "#d7d1f9",
            elements: [
              {
                imageName: "building blocks/single-layout-structure",
                description: "Single",
                chosen: false,
              },
              {
                imageName: "building blocks/list-layout-structure",
                description: "List",
                chosen: false,
              },
              {
                imageName: "building blocks/tiles-layout-structure",
                description: "Tiles",
                chosen: false,
              },
              {
                imageName: "building blocks/bars-layout-structure",
                description: "Bars",
                chosen: false,
              },
              {
                imageName: "building blocks/matrix-layout-structure",
                description: "Matrix",
                chosen: false,
              },
              {
                imageName: "building blocks/mosaic-layout-structure",
                description: "Mosaic",
                chosen: false,
              },
              {
                imageName: "building blocks/2d-plot-layout-structure",
                description: "2D-Plot",
                chosen: false,
              },
              {
                imageName: "building blocks/cluster-layout-structure",
                description: "Cluster",
                chosen: false,
              },
              {
                imageName: "building blocks/parallel-plot-layout-structure",
                description: "Parallel Plot",
                chosen: false,
              },
              {
                imageName: "building blocks/table-layout-structure",
                description: "Table",
                chosen: false,
              },
              {
                imageName: "building blocks/map-layout-structure",
                description: "Map",
                chosen: false,
              },
              {
                imageName: "building blocks/node-link-layout-structure",
                description: "Node-Link",
                chosen: false,
              },
              {
                imageName: "building blocks/nested-layout-structure",
                description: "Nested",
                chosen: false,
              },
              {
                imageName: "building blocks/indented-layout-structure",
                description: "Indented",
                chosen: false,
              },
              {
                imageName: "building blocks/partitioned-layout-structure",
                description: "Partitioned",
                chosen: false,
              },
            ],
          },
        ],
      ],
      searchTaskList: [
        {
          name: "Search Task",
        },
        [
          {
            description: "Inspire",
            chosen: false,
          },
          {
            description: "Formulate",
            chosen: false,
          },
          {
            description: "Reformulate",
            chosen: false,
          },
          {
            description: "Trace",
            chosen: false,
          },
          {
            description: "Collect",
            chosen: false,
          },
          {
            description: "Examine",
            chosen: false,
          },
          {
            description: "Analyze",
            chosen: false,
          },
          {
            description: "Compare",
            chosen: false,
          },
          {
            description: "Verify",
            chosen: false,
          },
        ],
      ],
      dataList: [
        {
          name: "Data",
        },
        [
          {
            header: "Attribute Type",
            color: "#f4f26f",
            elements: [
              {
                imageName: "data/nominal-attribute-type",
                description: "Nominal",
                chosen: false,
              },
              {
                imageName: "data/ordinal-attribute-type",
                description: "Ordinal",
                chosen: false,
              },
              {
                imageName: "data/quantitative-attribute-type",
                description: "Quantitative",
                chosen: false,
              },
            ],
          },
          {
            header: "Data Structure",
            color: "#f4d26f",
            elements: [
              {
                imageName: "data/hierarchy-data-structure",
                description: "Hierarchy",
                chosen: false,
              },
              {
                imageName: "data/faceted-classification-data-structure",
                description: "Faceted Classification",
                chosen: false,
              },
              {
                imageName: "data/ontology-data-structure",
                description: "Ontology",
                chosen: false,
              },
              {
                imageName: "data/folksonomy-data-structure",
                description: "Folksonomy",
                chosen: false,
              },
              {
                imageName: "data/1d-data-structure",
                description: "1-Dimensional",
                chosen: false,
              },
              {
                imageName: "data/set-data-structure",
                description: "Set",
                chosen: false,
              },
              {
                imageName: "data/temporal-data-structure",
                description: "Temporal",
                chosen: false,
              },
              {
                imageName: "data/2d-data-structure",
                description: "2-Dimensional",
                chosen: false,
              },
              {
                imageName: "data/spatial-data-structure",
                description: "Spatial",
                chosen: false,
              },
              {
                imageName: "data/3d-data-structure",
                description: "3-Dimensional",
                chosen: false,
              },
              {
                imageName: "data/multidimensional-data-structure",
                description: "Multidimensional",
                chosen: false,
              },
              {
                imageName: "data/table-data-structure",
                description: "Table",
                chosen: false,
              },
            ],
          },
        ],
      ],
    };
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
  height: 92vh;
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

.format-deselect-btn:hover {
  background: ms.$background-search-task-base-color;
}

.deselect-btn {
  position: absolute;
  bottom: 20px;
  right: 10px;
  box-shadow: #bbbbbb 0 5px 15px;
  background: white;
}

.full-control {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
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
