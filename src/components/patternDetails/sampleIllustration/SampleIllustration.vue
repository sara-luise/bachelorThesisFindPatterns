<template>
  <div class="sample-illustration-layout">
    <p>Sample Illustration</p>
    <div class="sample-layout">
      <img
        :src="
          require('@/assets/pattern_samples' +
            '/' +
            '(stacked)-radial-bar-chart' +
            '.png')
        "
        alt="pattern image"
      />
      <div class="sample-description">
        Example from the prototype Facettice as a simple bar chart (left) and
        TagCircus with stacked bar graph (right). Furthermore, this shows right
        example the overlay with Bézier curves.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SampleIllustration",
};
</script>

<style lang="scss" scoped>
.sample-illustration-layout {
  width: 100%;
  margin: 1% 3% 3% 3%;
}

.sample-layout {
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
}

img {
  max-width: 40%;
  max-height: 45rem;
  transform: scale(0.95);
  transition: transform 330ms ease-in-out;
}

img:hover {
  transform: scale(1);
}

p {
  font-weight: bold;
}

.sample-description {
  margin: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40%;
}
</style>
