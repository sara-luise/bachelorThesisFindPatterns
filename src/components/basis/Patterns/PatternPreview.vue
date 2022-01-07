<template>
  <router-link to="/pattern">
    <div class="pattern-card">
      <img
        :src="require('@/assets/patterns' + '/' + imageName + '.png')"
        alt="pattern image"
      />
      <div class="middle">
        <div class="patternname">{{ patternName }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "PatternPreview",
  props: ["imageName", "patternName"],
};
</script>

<style lang="scss" scoped>
.pattern-card {
  box-shadow: #bbbbbb 0 5px 15px;
  height: 250px;
  width: 250px;
  margin: 10px;
  align-items: center;
  background: white;
  position: relative;
  transition: transform 330ms ease-in-out;
}

.pattern-card:hover {
  transform: scale(1.05);
}



a {
  div {
    color: black;
  }
}

img {
  height: 250px;
  transform: scale(0.9);
}

.middle {
  transition: 0.5s ease;
  opacity: 0;
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
  opacity: 1;
}

.patternname {
  width: fit-content;
}
</style>
