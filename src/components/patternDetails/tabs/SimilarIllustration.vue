<template>
  <div id="tab-interfaces" class="similar-patterns-layout">
    <router-link :to="'/patterns/' + similarPattern.uid">
      <div class="similar-pattern-card">
        <img
          :src="
            require('@/assets/patterns' +
              '/' +
              similarPattern.imageName +
              '.png')
          "
          alt="similar pattern image"
        />
        <div class="divider"></div>
        <FacetPreview
          :facet-items="similarPattern.facets"
          :after-facets-divider="similarPattern.facetDividers"
          :main-facets="mainFacets"
        />
        <p class="pattern-name">{{ similarPattern.name }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import FacetPreview from "./FacetPreview";
export default {
  name: "SimilarIllustration",
  components: { FacetPreview },
  props: ["mainFacets", "similarPattern"],
};
</script>

<style lang="scss" scoped>
@use "src/mainStyles" as ms;
.similar-patterns-layout {
  margin: 0 20px 20px 20px;
  min-width: 60%;
  transition: transform 330ms ease-in-out;
  position: relative;
  box-shadow: #bbbbbb 0 5px 15px;
}

.similar-patterns-layout:hover {
  transform: scale(1.02);
}

.similar-pattern-card {
  height: fit-content;
  width: 100%;
  margin: 10px;
  display: grid;
  grid-template-columns: auto 5px 1fr;

  align-items: flex-start;
  background: white;
  padding: 1%;
}

.pattern-name {
  font-weight: bold;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  line-height: 2.5rem;
  margin-bottom: 0;
  align-self: flex-end;
  font-size: 2rem;
}

a {
  div {
    color: black;
  }
}

.divider {
  width: 5px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    ms.$background-element-base-color,
    ms.$background-grid-base-color,
    ms.$background-layout-structure-base-color,
    ms.$background-search-task-base-color,
    ms.$background-attribute-type-base-color,
    ms.$background-data-structure-base-color
  );
}

img {
  height: 250px;
  margin: 0.5rem 1rem 0.5rem 1rem;
}
</style>
