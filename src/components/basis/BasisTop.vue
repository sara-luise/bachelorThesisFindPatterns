<template>
  <div class="basic-top-div">
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "./SearchBar";

export default {
  components: { SearchBar },
};
</script>

<style lang="scss" scoped>
.basic-top-div {
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 5px 2px -2px #ededed;
  height: 5rem;
}
</style>
