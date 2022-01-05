<template>
  <div class="content">
    <PatternConstructionKitImage />
  </div>
</template>

<script>
import PatternConstructionKitImage from "./PatternConstructionKitImage";
export default {
  name: "Content",
  components: { PatternConstructionKitImage },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}
</style>
