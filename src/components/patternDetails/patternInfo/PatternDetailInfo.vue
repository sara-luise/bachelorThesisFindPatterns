<template>
  <div class="layout">
    <InfoLayout :left-list="leftList" :right-list="rightList" />
  </div>
</template>

<script>
import InfoLayout from "./InfoLayout";

export default {
  name: "PatternDetailInfo",
  components: { InfoLayout },
  props: ["patternInfo"],
  data() {
    return {
      leftList: [
        {
          header: "Search Pattern",
          body: this.$props.patternInfo.searchTask,
        },
        {
          header: "Context",
          body: this.$props.patternInfo.context,
        },
        {
          header: "Cross References",
          body: this.$props.patternInfo.crossReference,
        },
      ],
      rightList: [
        {
          header: "Problem",
          body: this.$props.patternInfo.problem,
        },
        {
          header: "Solution Approach",
          body: this.$props.patternInfo.solutionApproach,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  margin: 1rem 0;
  border: gray solid 0.05rem;
}
</style>
