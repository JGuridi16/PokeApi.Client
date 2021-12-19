import Pokemon from "@/models/pokemon.model";
import axios, { Axios, AxiosResponse } from "axios";
import Vue from "vue";
import apiConfig from "@/core/config/apiConfig";

export default class PokemonService extends Vue {
    public http: Axios;
    public apiUrl: string;

    constructor() {
        super();
        this.http = axios;
        this.apiUrl = apiConfig.BASE_URL || "";
    }

    public async getAll(queryOption?: string): Promise<AxiosResponse<Pokemon>> {
        return this.http.get(this.apiUrl + queryOption);
    }

    public async getById(id: string | number): Promise<AxiosResponse<Pokemon>> {
        return this.http.get(this.apiUrl + id);
    }

    public async download(pokemonId: string | number): Promise<AxiosResponse<Pokemon>> {
        return this.http.get(this.apiUrl + "download/" + pokemonId);
    }
}