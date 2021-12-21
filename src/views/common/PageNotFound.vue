<template>
  <div class="page-response">
    <div class="container-response">
      <div class="logo-response">
        <img :src="logo" alt="" />
      </div>
      <div class="text-response">
        <p>Oops,</p>
        <p>La página que estas buscando no está disponible.</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class PageNotFound extends Vue {
  constructor() {
    super();
  }
}
</script>