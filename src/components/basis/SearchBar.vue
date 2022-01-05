<template>
  <div class="search-bar-div">
    <md-autocomplete
      v-model="value"
      :md-options="patterns"
      @md-changed="getPatterns"
      @md-opened="getPatterns"
    >
      <label>Patternname</label>

      <template slot="md-autocomplete-item" slot-scope="{ item }">
        {{ item.name }}
      </template>
    </md-autocomplete>
  </div>
</template>

<script>
import "../../basicVueMaterialImports";

export default {
  name: "SearchBar",
  data: () => ({
    value: null,
    patternList: [
      {
        id: 1,
        name: "(Stacked) radial bar chart",
      },
      {
        id: 2,
        name: "(zoomable) facet filter",
      },
      {
        id: 3,
        name: "configurator with detailed information",
      },
      {
        id: 4,
        name: "data view with text and picture",
      },
      {
        id: 5,
        name: "flexible areas",
      },
      {
        id: 6,
        name: "focus area with (detail)-glyphs",
      },
      {
        id: 7,
        name: "fold-out list of results with text",
      },
      {
        id: 8,
        name: "glyph cluster",
      },
      {
        id: 9,
        name: "glyphs with legend",
      },
      {
        id: 10,
        name: "hierarchical configuration menu",
      },
      {
        id: 11,
        name: "hierarchical glyph cluster",
      },
      {
        id: 12,
        name: "histogram filter",
      },
      {
        id: 13,
        name: "image based preference selection",
      },
      {
        id: 14,
        name: "indented taxonomy",
      },
      {
        id: 15,
        name: "interactive point cloud",
      },
      {
        id: 16,
        name: "map-view with results ranking",
      },
      {
        id: 17,
        name: "mood board with glyph cluster",
      },
      {
        id: 18,
        name: "multi-column keyword filter",
      },
      {
        id: 19,
        name: "ordered filter history",
      },
      {
        id: 20,
        name: "parallel coordinates",
      },
      {
        id: 21,
        name: "parallel sets",
      },
      {
        id: 22,
        name: "pixel cluster",
      },
      {
        id: 23,
        name: "radial scatter plot with glyphs",
      },
      {
        id: 24,
        name: "result list with picture and text",
      },
      {
        id: 25,
        name: "scatter plot with glyphs",
      },
      {
        id: 26,
        name: "scrollable detailed view",
      },
      {
        id: 27,
        name: "sieve illustration with filter",
      },
      {
        id: 28,
        name: "smart lattice",
      },
      {
        id: 29,
        name: "tiles with filter concept",
      },
      {
        id: 30,
        name: "tiles view with glyphs",
      },
      {
        id: 31,
        name: "tiles view with images",
      },
      {
        id: 32,
        name: "tiles view with subsets",
      },
      {
        id: 33,
        name: "weighted bézier curves",
      },
    ],
    patterns: [],
  }),
  methods: {
    getPatterns(searchTerm) {
      this.patterns = new Promise((resolve) => {
        window.setTimeout(() => {
          if (!searchTerm) {
            resolve(this.patternList);
          } else {
            const term = searchTerm.toString().toLowerCase();

            resolve(
              this.patternList.filter(({ name }) =>
                name.toString().toLowerCase().includes(term)
              )
            );
          }
        }, 500);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../mainStyles" as ms;



.search-bar-div {
  width: 400px;
  display: flex;
  margin-top: 10px;
  margin-right: 2rem;
}

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

.md-field.md-theme-default.md-focused label {
  color: ms.$element-base-color;
}
</style>
