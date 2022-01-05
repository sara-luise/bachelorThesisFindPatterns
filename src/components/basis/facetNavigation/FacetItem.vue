<template>
  <md-button
    v-bind:class="{ chosen: item.chosen }"
    v-on:click="item.chosen = !item.chosen"
  >
    <div>
      <img :src="require('@/assets/' + item.imageName + '.png')" />
      <p>{{ item.description }}</p>
    </div>
  </md-button>
</template>

<script>
export default {
  name: "FacetItem",
  props: ["item"],
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

p {
  overflow: initial;
}

.chosen {
  font-weight: 700;
  p {
    font-size: 19px;
    margin: 0;
  }
}

img {
  height: 30px;
}
</style>
