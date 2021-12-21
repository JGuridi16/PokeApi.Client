<template>
  <div class="search-container">
    <b-field>
      <b-input
        placeholder="Search a pokemon"
        icon-pack="fas"
        icon="search"
        class="is-danger"
        :size="size"
        v-model="pokemonName"
        @keyup.enter.native="findPokemon"
        rounded
      />
      <b-button
        @click="findPokemon"
        class="is-danger rounded-right"
        :size="size"
        >Go</b-button
      >
    </b-field>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component({})
export default class SearchBarComponent extends Vue {
  @Prop({ type: String }) readonly size!: string;
  public pokemonName = "";
  constructor() {
    super();
  }

  public findPokemon(): void {
    if (!this.pokemonName) {
      this.operationFailed("El nombre del pokemon es inválido!");
      return;
    }
    this.$router.push({
      name: "pokemon-details",
      params: { identifier: this.pokemonName },
    });
  }

  public operationFailed(msg: string, time = 5000, color = "is-danger") {
    this.$buefy.notification.open({
      message: msg,
      duration: time,
      type: color,
      progressBar: true,
      pauseOnHover: true,
    } as any);
  }
}
</script>
<style scoped>
.search-container {
  border-radius: 50px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
.rounded-right {
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}
</style>