<template>
  <app-login class="mt-5"></app-login>
</template>

<script>
import Login from "./Login.vue";
import ConfirmRegis from "./ConfirmRegis.vue";

export default {
  components: {
    appLogin: Login,
    appConfirmRegis: ConfirmRegis
  }
};
</script>
