<template>
  <div class="interactions-view-layout">
    <p>Interactions</p>
    <div class="interactions-layout">
      <InteractionLayout
        :item="interaction"
        v-for="interaction in getList(pattern.facets, ['interaction'])"
        :key="interaction.uid"
        :after-facets-divider="pattern.facetDividers"
      />
    </div>
  </div>
</template>

<script>
import InteractionLayout from "./InteractionLayout";

export default {
  name: "InteractionsView",
  components: { InteractionLayout },
  props: ["pattern"],
  methods: {
    getList(facets, groups) {
      return this.$root.$data.brickService.getSpecificFacetsOfGroups(
        facets,
        groups
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../../mainStyles" as ms;

.interactions-view-layout {
  width: 100%;
  margin: 1rem 0;
}

.interactions-layout {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: fit-content;
  flex-wrap: wrap;
  width: fit-content;
}

p {
  font-weight: bold;
  margin-bottom: 0.3rem;
}
</style>
