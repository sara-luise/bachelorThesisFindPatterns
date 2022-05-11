<template>
  <div :key="$route.fullPath" class="pattern-detail-body">
    <router-link to="/" class="back-btn">
      <div class="format-back-btn">
        <img :src="require('@/assets/back_frame.png')" alt="back icon" />
        <p>Back</p>
      </div>
    </router-link>
    <Content />
  </div>
</template>

<script>
import Content from "../components/patternDetails/Content";
export default {
  name: "DetailPattern",
  components: { Content },
  data() {
    return {
      pattern: this.$root.$data.patternService.getByUid(this.$route.params.id),
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../mainStyles" as ms;

.pattern-detail-body {
  margin: 1% 0 1% 1%;
  height: 1000rem;
  overflow-y: scroll;
  position: relative;
  align-content: center;
}

.format-back-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  z-index: 10;
  background: white;
  width: fit-content;
  box-shadow: #bbbbbb 0 5px 15px;
  img {
    background: linear-gradient(
      to bottom,
      ms.$element-base-color,
      ms.$grid-base-color,
      ms.$layout-structure-base-color,
      ms.$search-task-base-color,
      ms.$data-structure-base-color,
      ms.$attribute-type-base-color
    );
    height: 30px;
    margin-right: 5px;
  }
}

a {
  div {
    color: black;
    outline: none;
  }
  text-decoration: none;
}
a:hover {
  text-decoration: none !important;
}

.md-button .md-ripple {
  padding: 0;
}

.format-back-btn:hover {
  background: rgb(245, 245, 245);
}

.back-btn {
  position: sticky;
  top: 5px;
  left: 5px;
  box-shadow: #bbbbbb 0 5px 15px;
  background: white;
  z-index: 100;
}
p {
  margin: 7px 0;
}
</style>
