<template>
  <div class="card columns is-flex-wrap-wrap p-3">
    <div
      class="
        column
        has-text-centered has-background-primary-light
        rounded-10
        is-12
      "
    >
      <div>
        <p class="has-text-weight-bold is-size-3">{{ pokemonName }}</p>
        <b-icon
          class="download-icon"
          pack="fas"
          icon="download"
          size="is-small"
          @click.native="downloadFile"
        ></b-icon>
      </div>
    </div>
    <div class="card-image column is-4">
      <figure class="img has-background-light rounded">
        <img :src="pokemonProfile" alt="pokemon_image.png" />
      </figure>
    </div>
    <div class="card-content column">
      <div class="content">
        <b-field label="Abilities">
          <ul v-bind:key="index" v-for="(ability, index) in pokemon.abilities">
            <b-tag type="is-info"
              >• {{ ability.ability.name | capitalize }}</b-tag
            >
          </ul>
        </b-field>
        <b-field label="Types">
          <ul v-bind:key="index" v-for="(type, index) in pokemon.types">
            <b-tag :class="type.type.name | colorType">{{
              type.type.name | empty
            }}</b-tag>
          </ul>
        </b-field>
        <b-field label="Sprites">
          <div class="is-flex">
            <div class="back-default-images">
              <figure
                v-if="pokemon.sprites.back_default"
                class="img-small rounded"
              >
                <img
                  :src="pokemon.sprites.back_default"
                  alt="pokemon_image.png"
                />
              </figure>

              <figure
                v-if="pokemon.sprites.back_female"
                class="img-small rounded"
              >
                <img
                  :src="pokemon.sprites.back_female"
                  alt="pokemon_image.png"
                />
              </figure>
            </div>

            <div class="back-shiny">
              <figure
                v-if="pokemon.sprites.back_shiny"
                class="img-small rounded"
              >
                <img
                  :src="pokemon.sprites.back_shiny"
                  alt="pokemon_image.png"
                />
              </figure>

              <figure
                v-if="pokemon.sprites.back_shiny_female"
                class="img-small rounded"
              >
                <img
                  :src="pokemon.sprites.back_shiny_female"
                  alt="pokemon_image.png"
                />
              </figure>
            </div>

            <div class="front-default-images">
              <figure
                v-if="pokemon.sprites.front_default"
                class="img-small rounded"
              >
                <img
                  :src="pokemon.sprites.front_default"
                  alt="pokemon_image.png"
                />
              </figure>
              <figure
                v-if="pokemon.sprites.front_female"
                class="img-small rounded"
              >
                <img
                  :src="pokemon.sprites.front_female"
                  alt="pokemon_image.png"
                />
              </figure>
            </div>

            <div class="front-shiny">
              <figure
                v-if="pokemon.sprites.front_shiny"
                class="img-small rounded"
              >
                <img
                  :src="pokemon.sprites.front_shiny"
                  alt="pokemon_image.png"
                />
              </figure>
              <figure
                v-if="pokemon.sprites.front_shiny_female"
                class="img-small rounded"
              >
                <img
                  :src="pokemon.sprites.front_shiny_female"
                  alt="pokemon_image.png"
                />
              </figure>
            </div>
          </div>
        </b-field>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Pokemon from "@/models/pokemon.model";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Helpers from "@/core/helpers";
import PokemonService from "@/services/pokemon.service";
@Component
export default class PokemonCardComponent extends Vue {
  @Prop() readonly pokemon!: Pokemon;
  public pokemonService: PokemonService;
  constructor() {
    super();
    this.pokemonService = new PokemonService();
  }

  public downloadFile() {
    if (!this.pokemon?.id) return;
    window.open(this.pokemonService.download(this.pokemon.id));
  }

  get pokemonProfile() {
    if (this.pokemon)
      return this.pokemon.sprites?.other?.dream_world?.front_default ?? "";
    return "";
  }

  get pokemonName() {
    if (this.pokemon) return Helpers.CapitalizeString(this.pokemon.name);
    return "";
  }
}
</script>
<style scoped>
.img {
  width: 300px;
  height: 300px;
}
.rounded {
  border-radius: 30px;
}
.rounded-10 {
  border-radius: 10px;
}
.img-small {
  width: 70px;
  height: 70px;
}
.download-icon {
  position: absolute;
  top: 6%;
  right: 3%;
  cursor: pointer;
}
</style>