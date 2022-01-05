<template>
  <div class="layout">
    <FacetView />
  </div>
</template>

<script>
import FacetView from "./FacetView";
export default {
  name: "ConstructionKitOverview",
  components: { FacetView },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100%;
}
</style>
