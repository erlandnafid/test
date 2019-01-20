<template>
    <div>
        <div class="container mt-3" v-for="nation in showNation" :key="nation.alpha2Code">
            <h2 class="text-center">Below is the information about {{ nation.name }}</h2>
            <br>
            <div class="row">
                <div class="col-sm-6">
                    <app-flag :getFlag="showNation"></app-flag>
                </div>
                <br>
                <div class="col-sm-6">
                    <app-maps :getMaps="showNation"></app-maps>
                </div>
            </div>
            <br>
            <app-info :getInfo="showNation"></app-info>
        </div>
    </div>
</template>

<script>
import Flag from '../Flag.vue';
import Maps from '../Maps.vue';
import Info from '../Info.vue';

export default {
  props: ["showNation"],
  components: {
      appFlag: Flag,
      appMaps: Maps,
      appInfo: Info
  }
};
</script>

<style scoped>
.card-body {
  border: 1px solid lightgray;
}
</style>



