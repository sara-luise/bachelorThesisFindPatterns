<template>
  <div class="search-bar-div">
    <md-field>
      <label class="search-bar-label" for="search-bar"
        >Search for patterns</label
      >
      <md-input
        name="search-bar"
        class="search-input"
        id="search-bar"
        v-model="search"
        v-on:focus="showList()"
        v-click-outside="hideList"
      />
    </md-field>
    <div v-if="listShown" class="search-list">
      <router-link
        :to="'/patterns/' + pattern.uid"
        class="search-list-item"
        v-for="pattern in filteredList"
        :key="pattern"
      >
        <div class="search-list-item-container">
          <img
            class="search-list-item-container-image"
            :src="
              require('@/assets/patterns' + '/' + pattern.imageName + '.png')
            "
            alt="pattern image"
          />
          {{ pattern.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "SearchBar",
  data() {
    return {
      patternList: this.$root.$data.patternService.getPatternsForSearch(),
      search: "",
      listShown: false,
    };
  },
  methods: {
    showList() {
      this.listShown = true;
    },
    hideList() {
      this.listShown = false;
    },
  },
  computed: {
    filteredList() {
      return this.patternList.filter((pattern) => {
        return pattern.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
Vue.directive("click-outside", {
  bind(el, binding, vnode) {
    var vm = vnode.context;
    var callback = binding.value;

    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        return callback.call(vm, event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});
</script>

<style lang="scss">
@use "../../mainStyles" as ms;

$width: 30rem;
$margin-right: 2rem;

.md-field.md-theme-default::before {
  background: linear-gradient(
    to right,
    ms.$element-base-color,
    ms.$grid-base-color,
    ms.$layout-structure-base-color,
    ms.$search-task-base-color,
    ms.$data-structure-base-color,
    ms.$attribute-type-base-color
  );
}

.search {
  &-bar {
    &-label {
      color: ms.$element-base-color !important;
    }

    &-div {
      width: $width;
      display: flex;
      margin-top: 10px;
      margin-right: $margin-right;
    }
  }

  &-input {
    font-size: large !important;
  }

  &-list {
    position: absolute;
    top: 4rem;
    max-height: 25rem;
    height: fit-content;
    background: white;
    padding: 0.5rem;
    z-index: 3;
    width: $width;
    margin-right: $margin-right;
    overflow-y: scroll;
    background: rgba(250, 250, 250, 0.95);
    border-left: gray solid 2px;

    &-item {
      padding: 0.5rem 0.4rem;

      &-container {
        font-size: x-large;
        color: black !important;

        &:hover {
          background: rgba(240, 240, 240, 0.95);
        }

        &-image {
          width: 4rem;
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
