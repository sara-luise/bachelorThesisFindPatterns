<template>
  <div>
    <BasisTop />
    <div class="basis-body">
      <FacetedNavigation />
      <PatternsContainer />
    </div>
  </div>
</template>

<script>
import FacetedNavigation from "../components/basis/facetNavigation/FacetedNavigation";
import BasisTop from "../components/basis/BasisTop";
import PatternsContainer from "../components/basis/Patterns/PatternsContainer";
export default {
  name: "BaseView",
  components: { PatternsContainer, BasisTop, FacetedNavigation },
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
