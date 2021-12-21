<template>
  <div>
    <div class="container main-container">
      <b-loading v-if="isLoading" :is-full-page="true" v-model="isLoading" />
      <section v-if="!pokemon.name && !isLoading">
        <div class="card not-found-card p-5">
          <div class="content has-text-weight-bold is-size-3">
            No match found
          </div>
        </div>
      </section>
      <section v-else>
        <pokemon-card-component class="mt-5" :pokemon="pokemon" />
      </section>
    </div>
    <b-button type="go-home-btn is-ghost" @click="goHome">Go home</b-button>
  </div>
</template>
<script lang="ts">
import Pokemon from "@/models/pokemon.model";
import PokemonService from "@/services/pokemon.service";
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class PokemonDetails extends Vue {
  public id!: string;
  public pokemonService: PokemonService;
  public pokemon: Pokemon;
  public isLoading = false;
  constructor() {
    super();
    this.pokemon = new Pokemon();
    this.pokemonService = new PokemonService();
  }
  public async mounted() {
    this.id = this.$route.params.identifier;
    await this.setPokemon();
  }

  public async setPokemon() {
    try {
      this.setLoading(true);
      let { data } = await this.pokemonService.getByName(this.id);
      this.pokemon = data;
    } finally {
      this.setLoading();
    }
  }

  public setLoading(isLoading = false) {
    this.isLoading = isLoading;
  }

  public goHome() {
    this.$router.push({ name: "home" });
  }
}
</script>
<style>
html,
body {
  overflow: hidden;
}
.main-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.not-found-card {
  margin-top: 70%;
}
.go-home-btn {
  position: absolute;
  bottom: 3%;
  right: 3%;
}
</style>