import { useFetchPokemonDetails } from "@/hooks/useFetchPokemonDetails";
import PokemonDetailsModal from "./Modal/PokemonDetailsModal";
import { useState } from "react";
import usePokemonData from "@/hooks/usePokemonData";

interface IPokemonItemProps {
    name: string;
    url: string;
    handleOnClick?: () => void;
}

const PokemonItem: React.FC<IPokemonItemProps> = (props) => {
    const { data, error, loading } = useFetchPokemonDetails(props.url);
    const {deletePokemon} = usePokemonData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (loading) {
        return (
            <tr>
                <td colSpan={7}><p>Loading pokemon data..</p></td>
            </tr>
        );
    }

    if (error) {
        return (
            <tr>
                <td colSpan={7}><p>An error has occurred loading pokemon data..</p></td>
            </tr>
        );
    }

    const handleClick = () => {
        setIsModalOpen(true);
    };

    return (
        <>
        <tr>
            <td onClick={handleClick}>{data?.id}</td>
            <td>{props.name}</td>
            <td>{data?.weight}</td>
            <td>{data?.height}</td>
            <td>
                <img src={data?.sprites.front_default} alt="front_default" />
            </td>
            <td>
                <img src={data?.sprites.back_default} alt="back_default" />
            </td>
            <td onClick={() => deletePokemon(props.name)}>x</td>
        </tr>
        <PokemonDetailsModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            pokemon={data}
        />
        </>
    );
}

export default PokemonItem;

