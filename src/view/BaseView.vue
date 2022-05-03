<template>
  <div>
    <BasisTop />
    <div class="basis-body">
      <FacetedNavigation
        :facets="facets"
        :add-selected-facet="addSelectedFacet"
        :remove-facet="removeFacet"
      />
      <PatternsContainer :patterns="patterns" />
    </div>
  </div>
</template>

<script>
import BasisTop from "../components/basis/BasisTop";
import PatternsContainer from "../components/basis/Patterns/PatternsContainer";
import _ from "lodash";
import FacetedNavigation from "../components/basis/facetNavigation/FacetedNavigation";
export default {
  name: "BaseView",
  components: { FacetedNavigation, PatternsContainer, BasisTop },
  data() {
    let facetsConf = {
      selected: [],
      buildingBlocksList: [
        {
          name: "Building Blocks",
        },
        [
          {
            header: "Elements",
            color: "color-element",
            elements: this.$root.$data.facetService.convertListForNavigation(
              this.$root.$data.facetService.getAllFacetOfGroup("element")
            ),
          },
          {
            header: "Grid",
            color: "color-grid",
            elements: this.$root.$data.facetService.convertListForNavigation(
              this.$root.$data.facetService.getAllFacetOfGroup("grid")
            ),
          },
          {
            header: "Layout Structure",
            color: "color-layout-structure",
            elements: this.$root.$data.facetService.convertListForNavigation(
              this.$root.$data.facetService.getAllFacetOfGroup(
                "layout-structure"
              )
            ),
          },
        ],
      ],
      searchTaskList: [
        {
          name: "Search Task",
        },
        this.$root.$data.facetService.convertListForNavigation(
          this.$root.$data.facetService.getAllFacetOfGroup("searchTask")
        ),
      ],
      dataList: [
        {
          name: "Data",
        },
        [
          {
            header: "Attribute Type",
            color: "color-attribute-type",
            elements: this.$root.$data.facetService.convertListForNavigation(
              this.$root.$data.facetService.getAllFacetOfGroup("attribute-type")
            ),
          },
          {
            header: "Data Structure",
            color: "color-data-structure",
            elements: this.$root.$data.facetService.convertListForNavigation(
              this.$root.$data.facetService.getAllFacetOfGroup("data-structure")
            ),
          },
        ],
      ],
    };
    return {
      facets: facetsConf,
      patterns: this.$root.$data.patternService.getFilteredPatterns(
        facetsConf.selected
      ),
    };
  },
  methods: {
    addSelectedFacet(facet) {
      this.facets.selected.push(facet);
      this.patterns = this.$root.$data.patternService.getFilteredPatterns(
        this.facets.selected
      );
      this.calculatePossibleNumbers();
    },
    removeFacet(facet) {
      _.remove(this.facets.selected, (fa) => fa.uid === facet.uid);
      this.patterns = this.$root.$data.patternService.getFilteredPatterns(
        this.facets.selected
      );
      this.calculatePossibleNumbers();
    },
    calculatePossibleNumbers() {
      this.facets.buildingBlocksList[1].forEach((group) => {
        group.elements.forEach((element) => {
          let previewSelected = this.facets.selected.concat([element]);
          element.possibleNumberPatterns =
            this.$root.$data.patternService.getFilteredPatterns(
              previewSelected
            ).length;
        });
      });

      this.facets.searchTaskList[1].forEach((element) => {
        let previewSelected = this.facets.selected.concat([element]);
        element.possibleNumberPatterns =
          this.$root.$data.patternService.getFilteredPatterns(
            previewSelected
          ).length;
      });

      this.facets.dataList[1].forEach((group) => {
        group.elements.forEach((element) => {
          let previewSelected = this.facets.selected.concat([element]);
          element.possibleNumberPatterns =
            this.$root.$data.patternService.getFilteredPatterns(
              previewSelected
            ).length;
        });
      });
    },
  },
  beforeMount() {
    this.calculatePossibleNumbers();
  },
};
</script>

<style scoped>
.basis-body {
  display: grid;
  grid-template-columns: 22rem auto;
  flex: 1;
  height: 94vh;
  margin: 0 0 0 1%;
}
</style>
