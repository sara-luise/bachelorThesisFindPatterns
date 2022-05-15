<template>
  <md-button
    class="facet-item"
    v-bind:class="{
      chosen: item.chosen,
      disabled: item.possibleNumberPatterns === 0,
    }"
    v-on:click="toggleSelection"
    :disabled="item.possibleNumberPatterns === 0"
  >
    <div>
      <p>{{ item.name }} ({{ item.possibleNumberPatterns }})</p>
    </div>
  </md-button>
</template>

<script>
export default {
  name: "FacetItemSmall",
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
  align-items: flex-start;
  justify-content: flex-start;
}

.chosen {
  font-weight: 900;
  border: #ddd solid;
  border-width: 0 0 2px 2px;
  border-radius: 0.2rem;

  p {
    font-size: 19px;
    margin: 0;
  }
}

.facet-item {
  padding: 0 1rem 0 1rem;
}
</style>
