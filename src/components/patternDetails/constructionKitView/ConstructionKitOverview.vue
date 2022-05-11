<template>
  <div class="construction-kit-layout">
    <FacetView :pattern="pattern" />
  </div>
</template>

<script>
import FacetView from "./FacetView";
export default {
  name: "ConstructionKitOverview",
  components: { FacetView },
  props: ["pattern"],
};
</script>

<style lang="scss" scoped>
.construction-kit-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
}
</style>
