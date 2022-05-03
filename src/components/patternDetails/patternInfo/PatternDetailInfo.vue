<template>
  <div class="info-layout">
    <InfoLayout :left-list="leftList" :right-list="rightList" />
  </div>
</template>

<script>
import InfoLayout from "./InfoLayout";
export default {
  name: "PatternDetailInfo",
  components: { InfoLayout },
  data() {
    return {
      leftList: [
        {
          header: "Search Pattern",
          body: "Keyword based search",
        },
        {
          header: "Context",
          body:
            "The design template can be used for an ordered list of keywords. Due to the color coding, the illustration of\n" +
            "Keywords possible in a taxonomy.\n" +
            "The design pattern is also suitable for multi-touch surfaces as\n" +
            "also for desktop applications with mouse interaction. For the former one should\n" +
            "Zoom functionality can be provided to aid in the selection of bars\n" +
            "facilitate.",
        },
        {
          header: "Cross References",
          body:
            "The design pattern can, for example, be combined with the weighted Bézier " +
            "curves or the Smart Lattice design pattern to create additional " +
            "To provide analysis options.",
        },
      ],
      rightList: [
        {
          header: "Problem",
          body:
            "The result set is limited by various filter criteria\n" +
            "and the user wants to know which criteria are based on the current selection\n" +
            "are particularly strongly connected. In addition, he does not want to lose track of his previous selection.",
        },
        {
          header: "Solution Approach",
          body:
            "The keywords are shown in the form of bars, the height of which the\n" +
            "Code frequency distribution. This enables a quick assessment of which filter criteria are particularly common in combination with the current selection\n" +
            "happen. Filter categories can still be coded by color\n" +
            "(see example images).\n" +
            "It is also possible to nest the bar charts in one another,\n" +
            "to offer a search history and inform the user about the impact of his\n" +
            "Inform filter selection in each filter step (see second example).",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.info-layout {
  width: 100%;
  margin: 3% 3% 0 3%;
}
</style>
