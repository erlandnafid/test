<template>
  <div>
    <div class="card" v-for="nation in getMaps" :key="nation.alpha2Code">
      <iframe
        :src="start + nation.latlng[0] + ',' + nation.latlng[1] + end"
        width="100%"
        height="400"
        frameborder="0"
        style="border:0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: ["getMaps"],
  data: function() {
    return {
      start: "https://maps.google.com/maps?q=",
      end: "&z=4&output=embed"
    };
  }
};
</script>

