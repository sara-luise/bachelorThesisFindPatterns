<template>
  <div class="content">
    <DetailHeader :pattern="pattern" />
    <div class="left-border">
      <InteractionsView :pattern="pattern" />
      <PatternDetailInfo :pattern-info="pattern.info" />
      <SampleIllustration
        :pattern-sample-illustration="pattern.sampleIllustration"
      />
      <Examples
        v-if="pattern.examples.length > 0"
        :pattern-example="pattern.examples"
      />
    </div>
    <SimilarPatternsIllustrations :pattern="pattern" />
  </div>
</template>

<script>
import "../../basicVueMaterialImports";
import PatternDetailInfo from "./patternInfo/PatternDetailInfo";
import SampleIllustration from "./sampleIllustration/SampleIllustration";
import SimilarPatternsIllustrations from "./SimilarPatternsInterfaceIllustrations";
import Examples from "./examples/Examples";
import DetailHeader from "./detailHeader/DetailHeader";
import InteractionsView from "./interactionsKit/InteractionsView";

export default {
  name: "Content",
  components: {
    InteractionsView,
    DetailHeader,
    Examples,
    SimilarPatternsIllustrations,
    SampleIllustration,
    PatternDetailInfo,
  },
  data() {
    return {
      pattern: this.$root.$data.patternService.getByUid(
        this.$route.path.substring(this.$route.path.lastIndexOf("/") + 1)
      ),
    };
  },
};
</script>

<style lang="scss" scoped>
@use "src/mainStyles" as ms;
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3%;
  height: 110%;
  max-width: 1300px;
  margin: auto;
}

.left-border {
  border-left: solid 0.5rem;
  border-image: linear-gradient(
      to bottom,
      ms.$background-element-base-color,
      ms.$background-grid-base-color,
      ms.$background-layout-structure-base-color,
      ms.$background-search-task-base-color,
      ms.$background-data-structure-base-color,
      ms.$background-attribute-type-base-color
    )
    1 100%;
  padding-left: 1rem;
}
</style>
