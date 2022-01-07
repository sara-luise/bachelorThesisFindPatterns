<template>
  <div class="facet-items-layout">
    <div class="facet-layout">
      <img :src="require('@/assets/' + item.imageName + '.png')" />
      <p>{{ item.description }}</p>
    </div>
    <div v-if="item.line" class="horizontal-divider"></div>
  </div>
</template>

<script>
export default {
  name: "FacetLayout",
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.facet-items-layout {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-top: 10px;
}

.facet-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 3px;
}

.horizontal-divider{
  background: #bbb;
  width: 1px;
  height: 60%;
}

p {
  overflow: initial;
}

img {
  height: 30px;
}
</style>
