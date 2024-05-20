import { getAllPokemon } from "@/services/pokemon";
import { useFetch } from "./useFetch";
import { PaginatedData } from "@/interfaces/api";

export const useFetchAllPokemons = () => useFetch<PaginatedData>(getAllPokemon);