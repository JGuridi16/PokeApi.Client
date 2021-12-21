<template>
  <div
    class="
      full-container
      is-flex is-justify-content-center is-align-items-center
    "
  >
    <div class="columns is-mobile is-centered">
      <search-bar size="is-medium" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {}
</script>
<style scoped>
.full-container {
  height: 92vh;
  background-image: url("../assets/thumbnail.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
