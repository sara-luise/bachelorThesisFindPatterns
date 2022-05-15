<template>
  <router-link :to="'/patterns/' + pattern.uid">
    <div class="pattern-card">
      <img
        :src="require('@/assets/patterns' + '/' + pattern.imageName + '.png')"
        alt="pattern image"
      />
      <div class="divider"></div>
      <div class="pattern-name-container">
        <div class="pattern-name">{{ pattern.name }}</div>
      </div>
      <div class="navigation-facets">
        <div v-for="facet in getNavigationFacets(pattern.uid)" :key="facet.uid">
          <FacetNavigationPatternPreview
            v-if="facet.category !== 'searchTask'"
            :item="facet"
          />
          <FacetNavigationSearchTaskPatternPreview
            v-if="facet.category === 'searchTask'"
            :item="facet"
          />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import FacetNavigationPatternPreview from "./FacetNavigationPatternPreview";
import FacetNavigationSearchTaskPatternPreview from "./FacetNavigationSearchTaskPatternPreview";

export default {
  name: "PatternPreview",
  components: {
    FacetNavigationSearchTaskPatternPreview,
    FacetNavigationPatternPreview,
  },
  props: ["pattern"],

  methods: {
    getNavigationFacets(patternUid) {
      return this.$root.$data.patternService.getAllNavigationFacetsByUid(
        patternUid
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../../mainStyles" as ms;

$size: 20rem;
.pattern-card {
  box-shadow: #bbbbbb 0 5px 15px;
  height: fit-content;
  width: $size;
  margin: 10px;
  align-items: center;
  background: white;
  position: relative;
  transition: transform 330ms ease-in-out;
}

.pattern-card:hover {
  transform: scale(1.02);
}

a {
  div {
    color: black;
  }
}

img {
  height: $size;
  transform: scale(0.9);
}

.pattern-card:hover .navigation-facets {
  opacity: 1;
}

.pattern-name {
  font-size: x-large;
  height: fit-content;
  padding-bottom: 0.3rem;

  &-container {
    margin: 1rem;
    height: fit-content;
  }
}

.divider {
  height: 0.3rem;
  background: linear-gradient(
    90deg,
    ms.$background-element-base-color 0%,
    ms.$background-grid-base-color 20%,
    ms.$background-layout-structure-base-color 30%,
    ms.$background-search-task-base-color 50%,
    ms.$background-data-structure-base-color 100%,
    ms.$background-attribute-type-base-color 70%
  );
  width: 70%;
}

.navigation-facets {
  transition: 0.5s ease;
  opacity: 0;
  height: 100%;
  position: absolute;
  padding: 1rem;
  top: 0;
  left: 30%;
  background: linear-gradient(
    90deg,
    rgba(235, 235, 235, 0.95) 0%,
    rgba(247, 247, 247, 0.95) 2%
  );

  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>
