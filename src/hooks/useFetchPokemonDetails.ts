import { getPokemonByUrl } from "@/services/pokemon"
import { useCallback } from "react"
import { useFetch } from "./useFetch";
import { PokemonDetails } from "@/interfaces/api";

export const useFetchPokemonDetails = (url: string) => {
    const fn = useCallback(() => getPokemonByUrl(url), [url]);
    return useFetch<PokemonDetails>(fn);
}