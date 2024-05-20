import { useEffect, useState } from "react";
import { PaginatedResult, Pokemon } from "@/interfaces/api";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { getPokemonById } from "@/services/pokemon";

interface PokemonCarouselProps {
    pokemons: PaginatedResult[];
}

const PokemonCarousel: React.FC<PokemonCarouselProps> = (props) => {
    const [api, setApi] = useState<CarouselApi | undefined>();
    const [currentPokemonId, setCurrentPokemonId] = useState<number>(1);
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
    // const { data: selectedPokemon, loading, error } = useFetchPokemonById(currentPokemonId);

    useEffect(() => {
        if (!api) return;

        setCurrentPokemonId(api.selectedScrollSnap() + 1);

        const handleSelect = () => {
            setCurrentPokemonId(api.selectedScrollSnap() + 1);
        }

        api.on('select', handleSelect);

        // Cleanup event listener on unmount
        return () => {
            api.off('select', handleSelect);
        };
    }, [api]);

    useEffect(() => {
        getPokemonById(currentPokemonId).then( data => setSelectedPokemon(data));
    }, [currentPokemonId])

    if (!selectedPokemon) return <p>None pokemon has been selected</p>

    return (
        <div>
            <Carousel setApi={setApi}>
                <CarouselContent>
                    {props.pokemons.map((pokemon, index) => (
                        <CarouselItem key={index}>
                            <div>
                                <h3>{selectedPokemon.name}</h3>
                                <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
                                <p>Weight: {selectedPokemon.weight}</p>
                                <p>Height: {selectedPokemon.height}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default PokemonCarousel;
