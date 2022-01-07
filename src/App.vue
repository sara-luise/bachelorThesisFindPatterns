<template>
  <div id="app">
    <div class="base-layout">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" src="./mainStyles.scss"></style>

<style lang="scss" scoped>
.base-layout {
  min-height: 100vw;
  display: flex;
  flex-direction: column;
}
</style>

<script></script>
