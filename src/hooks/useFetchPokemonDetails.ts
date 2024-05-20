import { getPokemonById, getPokemonByUrl } from "@/services/pokemon"
import { useCallback } from "react"
import { useFetch } from "./useFetch";
import { Pokemon } from "@/interfaces/api";

export const useFetchPokemonDetails = (url: string) => {
    const fn = useCallback(() => getPokemonByUrl(url), [url]);
    return useFetch<Pokemon>(fn);
}

export const useFetchPokemonById = (id: number) => {
    const fn = useCallback(() => getPokemonById(id), [id]);
    return useFetch<Pokemon>(fn);
}