<template>
  <div class="pattern-card">
    <img
      :src="
        require('@/assets/patterns' +
          '/' +
          '(Stacked)-radial-bar-chart' +
          '.png')
      "
      alt="pattern image"
    />
    <div class="middle">
      <div class="patternname">(Stacked) radial bar chart</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatternImage",
};
</script>

<style lang="scss" scoped>
.pattern-card {
  height: 22rem;
  width: 22rem;
  margin: 10px;
  align-items: center;
  position: relative;
  z-index: 1;
}

img {
  height: 22rem;
  z-index: -1;
}

.middle {
  transition: 0.5s ease;
  width: max-content;
  position: absolute;
  padding: 10px 10px 10px 100px;
  bottom: 5%;
  left: 33%;
  background: rgba(211, 211, 211, 0.9);
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.pattern-card:hover .middle {
  opacity: 0;
}

.patternname {
  width: fit-content;
}
</style>
