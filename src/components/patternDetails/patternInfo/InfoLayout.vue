<template>
  <div class="info-layout">
    <div class="left">
      <div v-for="item in leftList" :key="item.header" class="list-layout">
        <div class="info-text">{{ item.header }}</div>
        <div></div>
        <div class="info-text">{{ item.body }}</div>
      </div>
    </div>
    <div class="grid-divider"></div>
    <div class="right">
      <div v-for="item in rightList" :key="item.header" class="list-layout">
        <div class="info-text">{{ item.header }}</div>
        <div></div>
        <div class="info-text">{{ item.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoLayout",
  props: ["leftList", "rightList"],
};
</script>

<style lang="scss" scoped>
@use "src/mainStyles" as ms;

.info-layout {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto;
  height: max-content;
}

.list-layout {
  display: grid;
  grid-template-columns: 0.7fr 7px 2fr;
}

.left {
  background: linear-gradient(
    to bottom,
    ms.$background-element-base-color,
    ms.$background-grid-base-color,
    ms.$background-layout-structure-base-color,
    ms.$background-search-task-base-color
  );
  margin-right: 3%;
  height: fit-content;
}

.grid-divider {
  width: 0.03rem;
  background: gray;
}

.right {
  background: linear-gradient(
    to bottom,
    ms.$background-search-task-base-color,
    ms.$background-attribute-type-base-color,
    ms.$background-data-structure-base-color
  );
  margin-left: 3%;
  height: fit-content;
}

.info-text {
  background: white;
  padding: 10px;
}
</style>
