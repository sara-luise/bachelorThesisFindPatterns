<template>
  <div class="interface-layout">
    <div class="interface-card">
      <p class="pattern-name">{{ item.name }}</p>
      <img
        :src="require('@/assets/interfaces' + '/' + item.imageName + '.png')"
        alt="similar attern image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Interface",
  props: ["item"],
};
</script>

<style lang="scss" scoped>
@use "src/mainStyles" as ms;

.interface-layout {
  margin: 0 20px 20px 20px;
  min-width: 60%;
  transition: transform 330ms ease-in-out;
  position: relative;
  box-shadow: #bbbbbb 0 5px 15px;
}

.interface-card {
  height: fit-content;
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  background: white;
  padding: 1%;
}

p {
  font-weight: bold;
  font-size: large;
  margin: 0;
}
</style>
