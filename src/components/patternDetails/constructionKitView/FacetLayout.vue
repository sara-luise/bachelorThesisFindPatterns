<template>
  <div style="display: flex">
    <div class="facet-items-layout">
      <div class="layout">
        <div class="brackets-white-space"></div>
        <div v-bind:class="{ 'in-main-facets': inMainFacets }">
          <div class="facet-layout">
            <img
              :src="require('@/assets/' + item.imageName + '.png')"
              alt="facet image"
            />
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="afterFacetsDivider && afterFacetsDivider.includes(item.uid)"
      class="horizontal-divider"
    ></div>
  </div>
</template>

<script>
export default {
  name: "FacetLayout",
  props: ["item", "afterFacetsDivider", "inMainFacets"],
};
</script>

<style lang="scss" scoped>
.facet-items-layout {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin: 10px 0.5rem;
  height: fit-content;
  position: relative;
}

.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  margin-right: 1px;
}

.in-main-facets {
  border-radius: 0.1rem;
  border: gray solid 2px;
}

.facet-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin: 0;
  z-index: 100;
  padding: 0 0.3rem;
}

.brackets-white-space {
  position: absolute;
  height: 100%;
  background: white;
  z-index: 50;
  width: calc(100% - 0.7rem);
}

.horizontal-divider {
  background: #bbb;
  width: 1px;
  margin: 0.2rem 0;
}

p {
  overflow: initial;
  margin-bottom: 0;
}

img {
  height: 30px;
}
</style>
