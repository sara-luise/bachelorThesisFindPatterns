<template>
  <div class="layout">
    <PatternImage />
    <ConstructionKitOverview />
  </div>
</template>

<script>
import PatternImage from "./PatternImage";
import ConstructionKitOverview from "./constructionKitView/ConstructionKitOverview";
export default {
  name: "PatternConstructionKitImage",
  components: { ConstructionKitOverview,  PatternImage },
};
</script>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 3%;
}
</style>
