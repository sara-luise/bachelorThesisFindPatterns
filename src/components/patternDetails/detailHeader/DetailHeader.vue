<template>
  <div class="layout">
    <PatternImage
      class="pattern-image-col"
      :pattern-image="pattern.imageName"
      :pattern-name="pattern.name"
    />
    <div class="pattern-col">
      <p class="pattern-name">{{ pattern.name }}</p>
      <ConstructionKitOverview :pattern="pattern" />
    </div>
  </div>
</template>

<script>
import PatternImage from "./PatternImage";
import ConstructionKitOverview from "../constructionKitView/ConstructionKitOverview";

export default {
  name: "DetailHeader",
  components: { ConstructionKitOverview, PatternImage },
  props: ["pattern"],
};
</script>

<style lang="scss" scoped>
@use "src/mainStyles" as ms;

.layout {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.pattern {
  &-image-col {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &-col {
    width: 66%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &-name {
    line-height: 100%;
    font-size: 2.5rem;
    font-weight: bolder;
    padding-bottom: 0.7rem;
    margin: 0;
  }
}
</style>
