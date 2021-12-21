<template>
  <b-table
    class="card table-container has-background-light shadow p-2"
    :data="data"
    :paginated="isPaginated"
    :per-page="perPage"
    :current-page="currentPage"
    :pagination-simple="isPaginationSimple"
    :pagination-position="paginationPosition"
    :default-sort-direction="defaultSortDirection"
    :pagination-rounded="isPaginationRounded"
    :sort-icon="sortIcon"
    :sort-icon-size="sortIconSize"
    default-sort="user.first_name"
    aria-next-label="Next page"
    aria-previous-label="Previous page"
    aria-page-label="Page"
    aria-current-label="Current page"
    striped
    hoverable
  >
    <b-table-column
      field="id"
      label="ID"
      width="40"
      sortable
      numeric
      v-slot="props"
    >
      {{ props.row.id }}
    </b-table-column>

    <b-table-column field="name" label="Name" sortable v-slot="props">
      {{ props.row.name }}
    </b-table-column>

    <b-table-column
      field="base_Experience"
      label="Base Experience"
      sortable
      numeric
      v-slot="props"
    >
      {{ props.row.base_Experience }} exp
    </b-table-column>

    <b-table-column
      field="weight"
      label="Weight"
      sortable
      numeric
      v-slot="props"
    >
      {{ props.row.weight }} pounds
    </b-table-column>

    <b-table-column
      field="height"
      label="Height"
      sortable
      numeric
      v-slot="props"
    >
      {{ props.row.height }} feet
    </b-table-column>

    <b-table-column field="action" label="Actions" v-slot="props">
      <b-button
        outlined
        rounded
        type="is-info"
        size="is-small"
        @click="goToDetails(props.row.id)"
      >
        <b-icon pack="fas" icon="eye" size="is-small"></b-icon
      ></b-button>
    </b-table-column>

    <template #empty>
      <div class="has-text-centered has-text-grey-lighter my-5">
        <i class="fas fa-database fa-stack-2x" />
        <br /><br />
        <p>No records</p>
        <br />
        <b-button @click="loadAgain" type="is-info" rounded outlined
          >Reload</b-button
        >
      </div>
    </template>
  </b-table>
</template>
<script lang="ts">
import Pokemon from "@/models/pokemon.model";
import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";
@Component
export default class PokemonListComponent extends Vue {
  @Prop({}) readonly data!: Pokemon[];
  @Prop({ type: Boolean }) readonly isPaginated!: boolean;
  @Prop({ type: Boolean }) readonly isPaginationSimple!: boolean;
  @Prop({ type: Boolean }) readonly isPaginationRounded!: boolean;
  @Prop({ type: String }) readonly paginationPosition!: string;
  @Prop({ type: String }) readonly defaultSortDirection!: string;
  @Prop({ type: String }) readonly sortIcon!: string;
  @Prop({ type: String }) readonly sortIconSize!: string;
  @Prop({ type: Number }) readonly currentPage!: number;
  @Prop({ type: Number }) readonly perPage!: number;
  @Prop() readonly loadAgain!: any;

  constructor() {
    super();
  }

  public goToDetails(id: string): void {
    this.$router.push({ name: "pokemon-details", params: { identifier: id } });
  }
}
</script>
<style scoped>
.table-container, .card {
  border-radius: 10px !important;
}
</style>