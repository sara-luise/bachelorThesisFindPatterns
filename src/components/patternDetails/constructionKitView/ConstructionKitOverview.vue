<template>
  <div class="construction-kit-layout">
    <FacetView />
    <InteractionsView />
  </div>
</template>

<script>
import FacetView from "./FacetView";
import InteractionsView from "./interactionsKit/InteractionsView";
export default {
  name: "ConstructionKitOverview",
  components: { InteractionsView, FacetView },
};
</script>

<style lang="scss" scoped>
.construction-kit-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
</style>
