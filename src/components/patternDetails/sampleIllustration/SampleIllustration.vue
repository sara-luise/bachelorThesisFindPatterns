<template>
  <div class="sample-illustration-layout">
    <p>Sample Illustration</p>
    <div class="sample-layout">
      <img
        v-for="imageName in patternSampleIllustration.imageNames"
        :key="imageName"
        :src="require('@/assets/pattern_samples/' + imageName + '.png')"
        alt="pattern image"
      />
      <div class="sample-description">
        {{ patternSampleIllustration.imageExplanation }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SampleIllustration",
  props: ["patternSampleIllustration"],
};
</script>

<style lang="scss" scoped>
.sample-illustration-layout {
  width: 100%;
  margin: 1rem 0;
}

.sample-layout {
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
}

img {
  max-width: 40%;
  max-height: 45rem;
  border: gray solid 0.05rem;
}

p {
  font-weight: bold;
}

.sample-description {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 40%;
}
</style>
