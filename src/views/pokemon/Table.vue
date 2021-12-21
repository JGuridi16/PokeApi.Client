<template>
  <div>
    <b-loading :is-full-page="true" v-model="isLoading" />
    <section class="container is-fullhd pokemon-table p-5">
      <div class="filters-container columns is-mobile">
        <div class="column is-flex is-justify-content-space-around">
          <b-field label="Rows per page">
            <b-select class="card" v-model="perPage" rounded>
              <option :value="5">5 Rows</option>
              <option :value="10">10 Rows</option>
              <option :value="20">20 Rows</option>
              <option :value="30">30 Rows</option>
              <option :value="50">50 Rows</option>
            </b-select>
          </b-field>
          <b-field label="Top limit">
            <b-select class="card" v-model="vRows" rounded>
              <option :value="10">10 Pokemons</option>
              <option :value="50">50 Pokemons</option>
              <option :value="100">100 Pokemons</option>
              <option :value="500">500 Pokemons</option>
              <option :value="1118">All Pokemons</option>
            </b-select>
          </b-field>
        </div>
        <div class="column is-offset-6 is-flex is-justify-content-center">
          <b-field label="Find your pokemon">
            <b-input
              placeholder="Example: chu"
              icon-pack="fas"
              icon="search"
              class="card is-danger"
              icon-right="close-circle"
              icon-right-clickable
              @icon-right-click="clearIconClick"
              v-model="pokemonFilter"
              @keyup.enter.native="findPokemon"
              rounded
            />
          </b-field>
        </div>
      </div>
      <div class="table-container py-5">
        <pokemon-list-component
          :data="visualData"
          :isPaginated="true"
          :isPaginationSimple="false"
          :isPaginationRounded="true"
          :paginationPosition="'bottom'"
          :defaultSortDirection="'asc'"
          :sortIcon="'arrow-up'"
          :sortIconSize="'is-small'"
          :currentPage="1"
          :perPage="perPage"
          :loadAgain="loadPokemons"
        />
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import Pokemon from "@/models/pokemon.model";
import PokemonService from "@/services/pokemon.service";
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
@Component
export default class PokemonTable extends Vue {
  public pokemons: Pokemon[] = [];
  public visualData: Pokemon[] = [];
  public pokemonsService: PokemonService;
  public pokemonFilter = "";
  public isLoading = false;
  public perPage = 5;
  public vRows = 10;
  constructor() {
    super();
    this.pokemonsService = new PokemonService();
  }

  @Watch("vRows", { immediate: true })
  onVRowsChange() {
    this.loadPokemons(this.vRows);
  }

  @Watch("pokemonFilter")
  onPokemonFilterChange() {
    if (!this.pokemonsService) {
      this.visualData = this.pokemons;
      return;
    }
    this.visualData = this.pokemons.filter((x) =>
      x.name.includes(this.pokemonFilter)
    );
  }

  public loadPokemons(top: number) {
    this.setLoading(true);

    this.pokemonsService
      .getAll(`?top=${top}`)
      .then((res) => (this.visualData = this.pokemons = res.data))
      .finally(this.setLoading);
  }

  public clearIconClick() {
    this.pokemonFilter = "";
  }

  public setLoading(isLoading = false) {
    this.isLoading = isLoading;
  }
}
</script>
<style scoped>
.search-container, .card {
  border-radius: 50px;
}
</style>