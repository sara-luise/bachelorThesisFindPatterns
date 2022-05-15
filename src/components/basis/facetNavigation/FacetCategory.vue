<template>
  <md-list-item md-expand>
    <span class="md-list-item-text">{{ categoryItemsList[0].name }}</span>

    <md-list
      slot="md-expand"
      v-bind:class="
        categoryItemsList[0].name === 'Building Blocks'
          ? 'category-color-spectrum-building-blocks'
          : 'category-color-spectrum-data'
      "
    >
      <md-list-item
        class="md-inset"
        md-expand
        v-for="itemList in categoryItemsList[1]"
        :key="itemList.header"
      >
        <span class="md-list-item-text">{{ itemList.header }}</span>

        <md-list
          v-bind:class="[itemList.color]"
          slot="md-expand"
          class="category-facet-list"
        >
          <md-list-item
            class="md-inset"
            v-for="item in itemList.elements"
            :key="item.description"
          >
            <FacetItem
              class="try"
              :item="item"
              :add-selected-facet="addSelectedFacet"
              :remove-facet="removeFacet"
            />
          </md-list-item>
        </md-list>
      </md-list-item>
    </md-list>
  </md-list-item>
</template>

<script>
import FacetItem from "./FacetItem";

export default {
  name: "FacetCategory",
  components: { FacetItem },
  props: ["categoryItemsList", "addSelectedFacet", "removeFacet"],
};
</script>

<style lang="scss">
@use "../../../mainStyles" as ms;

.color {
  &-element {
    border-left-color: ms.$element-base-color;
  }

  &-grid {
    border-left-color: ms.$grid-base-color;
  }

  &-layout-structure {
    border-left-color: ms.$layout-structure-base-color;
  }

  &-attribute-type {
    border-left-color: ms.$attribute-type-base-color;
  }

  &-attribute-type {
    border-left-color: ms.$attribute-type-base-color;
  }

  &-attribute-type {
    border-left-color: ms.$attribute-type-base-color;
  }

  &-data-structure {
    border-left-color: ms.$data-structure-base-color;
  }
}

.category-color-spectrum-building-blocks {
  border-image: linear-gradient(
      to bottom,
      ms.$element-base-color,
      ms.$grid-base-color,
      ms.$layout-structure-base-color
    )
    1 100%;
}

.category-color-spectrum-data {
  border-image: linear-gradient(
      to bottom,
      ms.$attribute-type-base-color,
      ms.$data-structure-base-color
    )
    1 100%;
}

.category-facet-list {
  width: 18rem;
}

.try {
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
