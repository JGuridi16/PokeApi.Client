<template>
  <div class="base-component">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BaseView extends Vue {}
</script>
<style>
.base-component {
  min-height: 92vh;
  background-image: url("https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png");
}
</style>