<template>
  <div class="facet-view-layout border">
    <div class="rotate">
      <p>Interactions</p>
    </div>
    <InteractionLayout
      class="facet-view-layout"
      :item="interaction"
      v-for="interaction in interactionsList"
      :key="interaction"
    />
  </div>
</template>

<script>
import InteractionLayout from "./InteractionLayout";
export default {
  name: "InteractionsView",
  components: { InteractionLayout },
  data() {
    return {
      interactionsList: [
        {
          imageName: "filter-interaction",
          description: "Filter",
        },
        {
          imageName: "append-interaction",
          description: "Append",
          line: true,
        },
        {
          imageName: "rotate-interaction",
          description: "Rotate",
        },
        {
          imageName: "zoom-interaction",
          description: "Zooming",
        },
        {
          imageName: "inspect-interaction",
          description: "Inspect",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "src/mainStyles" as ms;
.facet-view-layout {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: fit-content;
  flex-wrap: wrap;
  width: fit-content;
}

.border {
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

.rotate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 -20px 0 -28px;
}
p {
  transform: rotate(-90deg);
  margin: 0;
}
</style>
