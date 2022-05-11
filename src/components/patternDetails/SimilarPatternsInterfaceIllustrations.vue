<template>
  <div class="tab-layout">
    <div>
      <TabButton
        class="btn"
        :info="simIllBtn"
        :switch-tabs="changeToSimIllTab"
      />
      <TabButton :info="interfacesBtn" :switch-tabs="changeToInterfacesTab" />
    </div>
    <div class="body-tab-layout" v-if="simIllBtn.active">
      <SimilarIllustration
        v-for="similarPattern in $root.$data.patternService.getSimilarPatterns(
          pattern
        )"
        :key="similarPattern.pattern.uid"
        :similar-pattern="similarPattern.pattern"
        :main-facets="pattern.facets"
      />
    </div>
    <div class="body-tab-layout" v-if="interfacesBtn.active">
      <Interface
        v-for="interf in pattern.interfaces"
        :key="interf.name"
        :item="interf"
      />
    </div>
  </div>
</template>

<script>
import "../../basicVueMaterialImports";
import TabButton from "./tabs/TabButton";
import SimilarIllustration from "./tabs/SimilarIllustration";
import Interface from "./tabs/Interface";

export default {
  name: "SimilarPatternsIllustrations",
  components: { Interface, SimilarIllustration, TabButton },
  props: ["pattern"],
  data() {
    return {
      simIllBtn: {
        name: "Similar Patterns",
        active: true,
      },
      interfacesBtn: {
        name: "interfaces",
        active: false,
      },
    };
  },
  methods: {
    changeToSimIllTab() {
      this.simIllBtn.active = true;
      this.interfacesBtn.active = false;
    },
    changeToInterfacesTab() {
      this.simIllBtn.active = false;
      this.interfacesBtn.active = true;
    },
  },
};
</script>

<style lang="scss">
.tab-layout {
  margin-top: 1rem;
  align-self: flex-start;
  width: 100%;
}

.body-tab-layout {
  overflow-y: scroll;
  height: 50rem;
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: #bbb;

  margin: 1rem 0;
  padding: 1%;
}

.md-tabs-container {
  display: flex;
}

.md-tabs.md-theme-default .md-tabs-navigation .md-button.md-active {
  color: black;
}

.md-tabs.md-theme-default .md-tabs-navigation {
  margin-bottom: 10px;
}

.btn {
  margin-left: 0;
}

.md-button-content {
  margin-right: 5px;
}
</style>
