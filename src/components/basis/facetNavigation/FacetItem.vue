<template>
  <md-button
    v-bind:class="{
      chosen: item.chosen,
      disabled: item.possibleNumberPatterns === 0,
    }"
    v-on:click="toggleSelection()"
    :disabled="item.possibleNumberPatterns === 0"
    class="facet-item"
  >
    <div>
      <img
        :src="require('@/assets/' + item.imageName + '.png')"
        alt="facet image"
      />
      <p>{{ item.name }} ({{ item.possibleNumberPatterns }})</p>
    </div>
  </md-button>
</template>

<script>
export default {
  name: "FacetItem",
  props: ["item", "addSelectedFacet", "removeFacet"],
  methods: {
    toggleSelection() {
      this.$props.item.chosen = !this.$props.item.chosen;
      if (this.$props.item.chosen) {
        this.$props.addSelectedFacet(this.$props.item);
      } else {
        this.$props.removeFacet(this.$props.item);
      }
    },
  },
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

.disabled {
  p {
    color: rgb(100, 100, 100);
  }
}

.chosen {
  font-weight: 900;
  border: #ddd solid;
  border-width: 0 0 2px 2px;
  border-radius: 0.2rem;

  p {
    font-size: 17px;
    margin: 0;
  }
}

img {
  height: 30px;
}

.facet-item {
  padding-right: 1rem;
}
</style>
