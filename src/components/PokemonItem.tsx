import { useFetchPokemonDetails } from "@/hooks/useFetchPokemonDetails";

interface IPokemonItemProps {
    name: string;
    url: string;
    handleOnClick?: () => void;
}

const PokemonItem: React.FC<IPokemonItemProps> = (props) => {
    const { data, error, loading } = useFetchPokemonDetails(props.url);

    if (loading) { return <p>Loading pokemon data..</p> }

    if (error) { return <p>An error has occured loading pokemon data..</p> }

    return (
        <tr onClick={props.handleOnClick}>
            <td>{data?.id}</td>
            <td>{props.name}</td>
            <td>{data?.weight}</td>
            <td>{data?.height}</td>
            <td>
                <img src={data?.sprites.front_default} alt="front_default" />
            </td>
            <td>
                <img src={data?.sprites.back_default} alt="front_default" />
            </td>
            <td>x</td>
        </tr>
    )
}

export default PokemonItem