<template>
  <div class="content">
    <PatternConstructionKitImage />
    <PatternDetailInfo />
    <SampleIllustration />
    <Examples />
    <SimilarPatternsIllustrations />
  </div>
</template>

<script>
import "../../basicVueMaterialImports";
import PatternConstructionKitImage from "./PatternConstructionKitImage";
import PatternDetailInfo from "./patternInfo/PatternDetailInfo";
import SampleIllustration from "./sampleIllustration/SampleIllustration";
import SimilarPatternsIllustrations from "./SimilarPatternsIllustrations";
import Examples from "./examples/Examples";
export default {
  name: "Content",
  components: {
    Examples,
    SimilarPatternsIllustrations,
    SampleIllustration,
    PatternDetailInfo,
    PatternConstructionKitImage,
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3%;
  height: 110%;
}
</style>
