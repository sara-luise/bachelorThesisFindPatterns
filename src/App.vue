<template>
  <div id="app">
    <div class="base-layout">
      <BasisTop />
      <div class="basis-body">
        <FacetedNavigation />
        <PatternsContainer />
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./mainStyles.scss"></style>

<style lang="scss" scoped>
.base-layout {
  min-height: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.basis-body {
  display: grid;
  grid-template-columns: 22rem auto;
  flex: 1;
  height: 100%;
  margin: 0 0 0 1%;
}
</style>

<script>
import BasisTop from "./components/basis/BasisTop";
import PatternsContainer from "./components/basis/PatternsContainer";
import FacetedNavigation from "./components/basis/facetNavigation/FacetedNavigation";
export default {
  components: { FacetedNavigation, PatternsContainer, BasisTop },
};
</script>
