<template>
  <md-list-item md-expand>
    <span class="md-list-item-text">{{ categoryItemsList[0].name }}</span>

    <md-list
      slot="md-expand"
      class="category-color-spectrum-search-task category-facet-list"
    >
      <md-list-item
        class="md-inset"
        v-for="item in categoryItemsList[1]"
        :key="item.header"
      >
        <FacetItemSmall
          class="facet-item"
          :item="item"
          :add-selected-facet="addSelectedFacet"
          :remove-facet="removeFacet"
        />
      </md-list-item>
    </md-list>
  </md-list-item>
</template>

<script>
import FacetItemSmall from "./FacetItemSmall";

export default {
  name: "FacetCategorySmall",
  components: { FacetItemSmall },
  props: ["categoryItemsList", "addSelectedFacet", "removeFacet"],
};
</script>

<style lang="scss">
@use "../../../mainStyles" as ms;

.category-color-spectrum-search-task {
  border-left-color: ms.$search-task-base-color;
}

.category-facet-list {
  width: 18rem;
}

.facet-item {
  margin: 0;
  padding: 0;
}

.md-list-item,
.md-list-item-content {
  padding: 0 !important;
  width: 97%;
}

.md-list-item.md-inset .md-list-item-content {
  padding-left: 0 !important;
}

md-list-item {
  padding: 0;
}

span {
  font-size: large;
}

.md-list-expand {
  background: transparent;
  width: fit-content;
  padding-right: 5px;
}

.md-list {
  background: transparent !important;
  border-width: 0 0 0 3px;
  border-style: solid;
}

.md-ripple {
  padding-left: 0 !important;
}

.md-list-item-default {
  padding: 0;
}

li {
  list-style-type: none;
}

.md-button-clean {
  margin-left: 10px;
}
</style>
