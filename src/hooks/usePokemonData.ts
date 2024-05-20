import { useContext } from "react";
import { PokemonDataContext } from "@/context/PokemonContext";

const usePokemonData = () => {
    const context = useContext(PokemonDataContext);

    if (!context) {
        throw new Error('No context for pokemon data');
    }

    return context;
}

export default usePokemonData;