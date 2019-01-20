<template>
    <div>
        <app-top-content @getNation="nation = $event"></app-top-content>
        <app-default-header></app-default-header>
        <app-nation :showNation="nation"></app-nation>
    </div>
</template>

<script>
import TopContent from "../components/TopContent.vue";
import DefaultHeader from "./DefaultHeader.vue";
import Nation from "../components/Nation/Nation.vue";

export default {
  data: function() {
    return {
      nation: []
    };
  },
  components: {
    appTopContent: TopContent,
    appDefaultHeader: DefaultHeader,
    appNation: Nation
  }
};
</script>
