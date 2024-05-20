import { useState, useEffect, createContext } from "react";
import { useFetchAllPokemons } from "@/hooks/useFetchAllPokemons";

type PokemonDataResult = ReturnType<typeof useFetchAllPokemons>;
type PokemonDataSet = PokemonDataResult & { deletePokemon: (name: string) => void; }
export const PokemonDataContext = createContext<PokemonDataSet>({
    data: null, 
    error: null, 
    loading: true,
    deletePokemon: () => {}
});

const PokemonProvider: React.FC<{children: React.ReactNode}> = (props) => {
    const {data: cachedData, error, loading} = useFetchAllPokemons();
    const [pokemonData, setPokemonData] = useState<PokemonDataResult>({
        data: cachedData,
        error,
        loading
    });

    const deletePokemon = (name: string) => setPokemonData(prev => {
        if (!prev.data) return prev;


        const filteredResults = prev.data.results.filter(pokemon => pokemon.name !== name);

        return {
            ...prev,
            data: {
                ...prev.data,
                results: filteredResults,
            },
        };
    });


    useEffect(() => {
        if(!loading && !error && cachedData) {
            setPokemonData({data: cachedData, error, loading});
        }
    }, [cachedData, error, loading])
    

    return (
        <PokemonDataContext.Provider value={{ ...pokemonData, deletePokemon }}>
            {props.children}
        </PokemonDataContext.Provider>
    )
}

export default PokemonProvider