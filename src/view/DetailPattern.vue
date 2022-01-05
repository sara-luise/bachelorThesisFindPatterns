<template>
  <div class="pattern-detail-body">
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
};
</script>

<style lang="scss" scoped>
@use "../mainStyles" as ms;

.pattern-detail-body {
  margin: 1% 0 1% 1%;
  height: 10000px;
  overflow: scroll;
  position: relative;
}

.format-back-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  z-index: 10;
  background: white;
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
  background: ms.$background-search-task-base-color;
}

.back-btn {
  position: absolute;
  top: 5px;
  left: 5px;
  box-shadow: #bbbbbb 0 5px 15px;
  background: white;
}
p {
  margin: 7px 0;
}
</style>
