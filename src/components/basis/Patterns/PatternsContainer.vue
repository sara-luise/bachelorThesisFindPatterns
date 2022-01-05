<template>
  <div class="patters-container">
    <PatternPreview :pattern-name="'(Stacked) radial bar chart'" :image-name="'(Stacked)-radial-bar-chart'" />
    <PatternPreview :pattern-name="'(zoomable) facet filter'" :image-name="'(zoomable)-facet-filter'"/>
    <PatternPreview :pattern-name="'(zoomable) facet filter'" :image-name="'(zoomable)-facet-filter'"/>
    <PatternPreview :pattern-name="'(zoomable) facet filter'" :image-name="'(zoomable)-facet-filter'"/>
    <PatternPreview :pattern-name="'(zoomable) facet filter'" :image-name="'(zoomable)-facet-filter'"/>
    <PatternPreview :pattern-name="'(zoomable) facet filter'" :image-name="'(zoomable)-facet-filter'"/>
    <PatternPreview :pattern-name="'focus area with (detail)-glyphs'" :image-name="'focus-area-with-(detail)-glyphs'"/>
    <PatternPreview :pattern-name="'(zoomable) facet filter'" :image-name="'(zoomable)-facet-filter'"/>
    <PatternPreview :pattern-name="'(zoomable) facet filter'" :image-name="'(zoomable)-facet-filter'"/>
    <PatternPreview :pattern-name="'(zoomable) facet filter'" :image-name="'(zoomable)-facet-filter'"/>
  </div>
</template>

<script>
import PatternPreview from "./PatternPreview";
export default {
  name: "PatternsContainer",
  components: { PatternPreview },
};
</script>

<style lang="scss" scoped>
@use "../../../mainStyles" as ms;

.patters-container {
  background: linear-gradient(
    200deg,
    ms.$background-element-base-color 0%,
    ms.$background-grid-base-color 30%,
    ms.$background-layout-structure-base-color 50%,
    ms.$background-search-task-base-color 60%,
    ms.$background-attribute-type-base-color 80%,
    ms.$background-data-structure-base-color 100%
  );
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  padding: 1%;
  align-content: flex-start;

}
</style>
