import { RouteConfig } from 'vue-router';

const pokemonRoutes = {
    path: '/pokemon',
    name: 'pokemon-default',
    component: () => import('../views/base/base.vue'),
    children: [
        {
            path: '',
            name: 'pokemons',
            component: () => import('../views/pokemon/Table.vue')
        },
        {
            path: ':identifier',
            name: 'pokemon-details',
            component: () => import('../views/pokemon/Details.vue')
        }
    ]
} as RouteConfig;

export default pokemonRoutes;