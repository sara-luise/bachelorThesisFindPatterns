<template>
  <div class="tab-layout">
    <div>
      <TabButton :info="simIllBtn" :switch-tabs="changeToSimIllTab" />
      <TabButton :info="interfacesBtn" :switch-tabs="changeToInterfacesTab" />
    </div>
    <div class="body-tab-layout" v-if="simIllBtn.active">
      <SimilarIllustration :similar-pattern="similarPatterns[0]" />
      <SimilarIllustration :similar-pattern="similarPatterns[1]" />
      <SimilarIllustration :similar-pattern="similarPatterns[2]" />
      <SimilarIllustration :similar-pattern="similarPatterns[3]" />
      <SimilarIllustration :similar-pattern="similarPatterns[4]" />
      <SimilarIllustration :similar-pattern="similarPatterns[5]" />
      <SimilarIllustration :similar-pattern="similarPatterns[6]" />
    </div>
    <div class="body-tab-layout" v-if="interfacesBtn.active">
      <Interface :item="interfaces[0]" />
      <Interface :item="interfaces[1]" />
    </div>
  </div>
</template>

<script>
import "../../basicVueMaterialImports";
import TabButton from "./tabs/TabButton";
import SimilarIllustration from "./tabs/SimilarIllustration";
import Interface from "./tabs/Interface";

export default {
  name: "SimilarPatternsIllustrations",
  components: { Interface, SimilarIllustration, TabButton },
  data() {
    return {
      simIllBtn: {
        name: "Similar Illustration",
        active: true,
      },
      interfacesBtn: {
        name: "interfaces",
        active: false,
      },
      interfaces: [
        {
          name: "Facettice",
          image: "Facettice",
        },
        {
          name: "Movie Recommenderi",
          image: "Movie Recommenderi",
        },
      ],
      similarPatterns: [
        {
          name: "Multi Column Keyword Filter",
          image: "multi-column-keyword-filter",
          facetItems: {
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
              },
            ],
            searchTaskList: ["Formualte"],
            dataList: [
              {
                imageName: "data/nominal-attribute-type",
                description: "Nominal",
              },
              {
                imageName: "data/folksonomy-data-structure",
                description: "Folksonomy",
              },
            ],
          },
        },
        {
          name: "Weighted Bézier Curves",
          image: "weighted-bézier-curves",
          facetItems: {
            buildingBlocksList: [
              {
                imageName: "building blocks/line-element",
                description: "Line",
              },
              {
                imageName: "building blocks/rectangular-grid",
                description: "Rectangular",
                line: true,
              },
              {
                imageName: "building blocks/radial-grid",
                description: "Radial",
              },
              {
                imageName: "building blocks/node-link-layout-structure",
                description: "Node-Link",
              },
            ],
            searchTaskList: ["Analyze"],
            dataList: [
              {
                imageName: "data/quanti-attribute-type",
                description: "Quantitative",
              },
              {
                imageName: "data/folksonomy-data-structure",
                description: "Folksonomy",
              },
            ],
          },
        },
        {
          name: "Smart Lattice",
          image: "smart-lattice",
          facetItems: {
            buildingBlocksList: [
              {
                imageName: "building blocks/line-element",
                description: "Line",
              },
              {
                imageName: "building blocks/triangular-grid",
                description: "triangular",
              },
              {
                imageName: "building blocks/node-link-layout-structure",
                description: "Node-Link",
              },
            ],
            searchTaskList: ["Trace", "Analyze"],
            dataList: [
              {
                imageName: "data/quanti-attribute-type",
                description: "Quantitative",
              },
              {
                imageName: "data/folksonomy-data-structure",
                description: "Folksonomy",
              },
            ],
          },
        },
        {
          name: "Sieve Illustration With Filters",
          image: "sieve-illustration-with-filters",
          facetItems: {
            buildingBlocksList: [
              {
                imageName: "building blocks/image-element",
                description: "Image",
              },
              {
                imageName: "building blocks/line-element",
                description: "Line",
              },
              {
                imageName: "building blocks/radial-grid",
                description: "Radial",
              },
              {
                imageName: "building blocks/partitioned-layout-structure",
                description: "Partitioned",
              },
            ],
            searchTaskList: ["Reformulate", "Trace", "Analyze"],
            dataList: [
              {
                imageName: "data/nominal-attribute-type",
                description: "Nominal",
              },
              {
                imageName: "data/ontology-data-structure",
                description: "Ontology",
              },
            ],
          },
        },
        {
          name: "Configurator With Detailed Information",
          image: "configurator-with-detailed-information",
          facetItems: {
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
                description: "tiles",
              },
            ],
            searchTaskList: ["Formulate", "Examine"],
            dataList: [
              {
                imageName: "data/nominal-attribute-type",
                description: "Nominal",
              },
              {
                imageName: "data/ordinal-attribute-type",
                description: "Ordinal",
              },
              {
                imageName: "data/quanti-attribute-type",
                description: "Quantitative",
              },
              {
                imageName: "data/multidimensional-data-structure",
                description: "Multidimensional",
              },
            ],
          },
        },
        {
          name: "(Zoomable) Facet Filter",
          image: "(zoomable)-facet-filter",
          facetItems: {
            buildingBlocksList: [
              {
                imageName: "building blocks/area-element",
                description: "Area",
              },
              {
                imageName: "building blocks/rectangular-grid",
                description: "Rectangular",
              },
              {
                imageName: "building blocks/bars-layout-structure",
                description: "Bars",
              },
            ],
            searchTaskList: ["Formulate", "Analyze"],
            dataList: [
              {
                imageName: "data/nominal-attribute-type",
                description: "Nominal",
              },
              {
                imageName: "data/ordinal-attribute-type",
                description: "Ordinal",
              },
              {
                imageName: "data/hierarchy-data-structure",
                description: "Hierarchy",
              },
              {
                imageName: "data/faceted-classification-data-structure",
                description: "Faceted Classification",
              },
            ],
          },
        },
        {
          name: "Histogram Filter",
          image: "histogram-filter",
          facetItems: {
            buildingBlocksList: [
              {
                imageName: "building blocks/area-element",
                description: "Area",
              },
              {
                imageName: "building blocks/rectangular-grid",
                description: "Rectangular",
              },
              {
                imageName: "building blocks/bars-layout-structure",
                description: "Bars",
              },
            ],
            searchTaskList: ["Formulate", "Analyze"],
            dataList: [
              {
                imageName: "data/quanti-attribute-type",
                description: "Quantitative",
              },
              {
                imageName: "data/faceted-classification-data-structure",
                description: "Faceted Classification",
              },
            ],
          },
        },
      ],
    };
  },
  methods: {
    changeToSimIllTab() {
      this.simIllBtn.active = true;
      this.interfacesBtn.active = false;
    },
    changeToInterfacesTab() {
      this.simIllBtn.active = false;
      this.interfacesBtn.active = true;
    },
  },
};
</script>

<style lang="scss">
.tab-layout {
  align-self: flex-start;
  width: 90%;
}

.body-tab-layout {
  overflow-y: scroll;
  height: 50rem;
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: #bbb;

  margin-left: 2%;
  padding: 1%;
}

.md-tabs-container {
  display: flex;
}

.md-tabs.md-theme-default .md-tabs-navigation .md-button.md-active {
  color: black;
}

.md-tabs.md-theme-default .md-tabs-navigation {
  margin-bottom: 10px;
}

.md-button-content {
  margin-right: 5px;
}
</style>
