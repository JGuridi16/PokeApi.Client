import Pokemon from "@/models/pokemon.model";
import { AxiosInstance, AxiosResponse } from "axios";
import Vue from "vue";
import apiConfig from "@/core/config/apiConfig";

export default class PokemonService extends Vue {
    public $http!: AxiosInstance;
    public apiUrl: string;

    constructor() {
        super();
        this.apiUrl = (apiConfig.VUE_APP_API_BASE_URL || "") + "pokemon/";
    }

    public async getAll(queryOption?: string): Promise<AxiosResponse<Pokemon[]>> {
        return await this.$http.get(this.apiUrl + queryOption);
    }

    public async getById(id: string | number): Promise<AxiosResponse<Pokemon>> {
        return await this.$http.get(this.apiUrl + id);
    }

    public async getByName(id: string): Promise<AxiosResponse<Pokemon>> {
        return await this.$http.get(this.apiUrl + "getByName/" + id);
    }

    public download(pokemonId: string | number): string {
        return this.apiUrl + "download/" + pokemonId;
    }
}