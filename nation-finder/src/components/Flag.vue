<template>
<div>
  <div class="card mb-4" style="height: 400px;" v-for="nation in getFlag" :key="nation.alpha2Code">
    <img class="card-img-top" :src="nation.flag" alt="Flag">
  </div>
</div>
</template>

<script>
export default {
    props: ['getFlag']
}
</script>

