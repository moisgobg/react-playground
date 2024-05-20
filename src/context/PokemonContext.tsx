import { useState, useEffect, createContext } from "react";
import { useFetchAllPokemons } from "@/hooks/useFetchAllPokemons";

type PokemonDataResult = ReturnType<typeof useFetchAllPokemons>;
export const PokemonDataContext = createContext<PokemonDataResult>({
    data: null, 
    error: null, 
    loading: true
});

const PokemonProvider: React.FC<{children: React.ReactNode}> = (props) => {
    const {data: cachedData, error, loading} = useFetchAllPokemons();
    const [pokemonData, setPokemonData] = useState<PokemonDataResult>({
        data: cachedData,
        error,
        loading
    });

    useEffect(() => {
        if(!loading && !error && cachedData) {
            setPokemonData({data: cachedData, error, loading});
        }
    }, [cachedData, error, loading])
    

    return (
        <PokemonDataContext.Provider value={pokemonData}>
            {props.children}
        </PokemonDataContext.Provider>
    )
}

export default PokemonProvider