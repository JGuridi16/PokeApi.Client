import Vue from 'vue';

// Shared
import navbar from '@/components/shared/navbar.vue';
Vue.component('navbar', navbar);

// Common
import searchBar from '@/components/common/search-bar.vue'
Vue.component('search-bar', searchBar);

// Pokemon Components
import PokemonListComponent from '@/components/pokemon/pokemon-list.vue';
import PokemonCardComponent from '@/components/pokemon/pokemon-card.vue';
Vue.component('pokemon-list-component', PokemonListComponent);
Vue.component('pokemon-card-component', PokemonCardComponent);