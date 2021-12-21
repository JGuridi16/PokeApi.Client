<template>
  <div id="app">
    <navbar class="nav" />
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({})
export default class App extends Vue {
  constructor() {
    super();
  }
}
</script>
<style>
:root {
  --khaki: #a8a878;
  --redFire: #f08030;
  --royalBlue: #6890f0;
  --leafGreen: #78c850;
  --electricYellow: #f8d030;
  --blueHeaven: #98d8d8;
  --darkRed: #98d8d8;
  --violet: #a040a0;
  --lightBrown: #e0c068;
  --lightViolet: #a890f0;
  --rose: #f85888;
  --yellowGreen: #a8b820;
  --darkGold: #b8a038;
  --purple: #705898;
  --grayish: #705848;
  --darkerViolet: #7038f8;
  --skyGray: #b8b8d0;
  --salmon: #ee99ac;
}
.is-khaki {
  background-color: var(--khaki) !important;
  color: white !important;
}
.is-redFire {
  background-color: var(--redFire) !important;
  color: white !important;
}
.is-royalBlue {
  background-color: var(--royalBlue) !important;
  color: white !important;
}
.is-leafGreen {
  background-color: var(--leafGreen) !important;
  color: white !important;
}
.is-electricYellow {
  background-color: var(--electricYellow) !important;
  color: white !important;
}
.is-blueHeaven {
  background-color: var(--blueHeaven) !important;
  color: white !important;
}
.is-darkRed {
  background-color: var(--darkRed) !important;
  color: white !important;
}
.is-violet {
  background-color: var(--violet) !important;
  color: white !important;
}
.is-lightBrown {
  background-color: var(--lightBrown) !important;
  color: white !important;
}
.is-lightViolet {
  background-color: var(--lightViolet) !important;
  color: white !important;
}
.is-rose {
  background-color: var(--rose) !important;
  color: white !important;
}
.is-yellowGreen {
  background-color: var(--yellowGreen) !important;
  color: white !important;
}
.is-darkGold {
  background-color: var(--darkGold) !important;
  color: white !important;
}
.is-purple {
  background-color: var(--purple) !important;
  color: white !important;
}
.is-grayish {
  background-color: var(--grayish) !important;
  color: white !important;
}
.is-darkerViolet {
  background-color: var(--darkerViolet) !important;
  color: white !important;
}
.is-skyGray {
  background-color: var(--skyGray) !important;
  color: white !important;
}
.is-salmon {
  background-color: var(--salmon) !important;
  color: white !important;
}
body,
html {
  overflow: hidden;
}
</style>