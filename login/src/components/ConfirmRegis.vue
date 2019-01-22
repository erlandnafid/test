<template>
  <div style="width:400px; border: 1px solid silver; margin: 30px auto; padding: 15px;">
    <h4 class="text-center">Enter the confirmation code</h4>
    
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Confirmation Code..." v-model="code">
      <div class="input-group-append">
        <span class="input-group-text" @click="verify">Verify</span>
      </div>
    </div>
    <div class="alert alert-danger" v-if="checker">
      Resend confirmation code <button class="btn btn-light ml-3">Resend</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      code: "",
      checker: false
    };
  },
  methods: {
    verify() {
      if (this.code == "666666") {
        this.$router.push("/main-page");
      } else {
        this.checker = true;
      }
    }
  }
};
</script>

<style scoped>
.resend {
  color: #721c24 !important;
  text-decoration: none !important;
  text-align: center !important;
}
</style>


