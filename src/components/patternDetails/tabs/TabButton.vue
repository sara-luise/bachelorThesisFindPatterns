<template>
  <md-button v-bind:class="{ active: info.active }" @click="switchTabs()">{{
    info.name
  }}</md-button>
</template>

<script>
export default {
  name: "TabButton",
  props: ["info", "switchTabs"],
};
</script>

<style lang="scss" scoped>
@use "src/mainStyles" as ms;
.active {
  border-bottom: 3px solid;
  border-image: linear-gradient(
      90deg,
      ms.$element-base-color,
      ms.$grid-base-color,
      ms.$layout-structure-base-color,
      ms.$search-task-base-color,
      ms.$attribute-type-base-color,
      ms.$data-structure-base-color
    )
    10;
}
</style>
