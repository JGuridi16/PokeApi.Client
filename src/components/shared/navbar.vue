<template>
  <b-navbar class="navbar" type="is-light" fixed-top mobile-burger>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ name: 'home' }">
        <img :src="require('@/assets/logo.png')" alt="pokeapi.png" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ name: 'home' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'pokemons' }">
        Pokedex
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<style scoped>
.navbar {
  height: 8vh;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>