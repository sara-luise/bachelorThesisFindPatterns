<template>
  <div class="facet-items-layout">
    <div class="facet-layout">
      <p>{{ item.name }}</p>
      <img
        :src="require('@/assets/' + item.imageName + '.png')"
        alt="facet image"
      />
    </div>
    <div
      v-if="afterFacetsDivider.includes(item.uid)"
      class="horizontal-divider"
    ></div>
  </div>
</template>

<script>
export default {
  name: "InteractionLayout",
  props: ["item", "afterFacetsDivider"],
};
</script>

<style lang="scss" scoped>
.facet-items-layout {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-bottom: 10px;
}

.facet-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 3px;
}

.horizontal-divider {
  background: #bbb;
  width: 1px;
  margin-top: 1rem;
}

p {
  overflow: initial;
}

img {
  height: 30px;
}
</style>
