import Pokemon from "@/models/pokemon.model";

export default interface PokeApiResult {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}