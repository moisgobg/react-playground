import PokemonItem from "@/components/PokemonItem";
import { PaginatedResult } from "@/interfaces/api";

interface IPokemonListProps {
    children?: React.ReactNode;
    pokemons: PaginatedResult[];
}

const PokemonList: React.FC<IPokemonListProps> = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Peso</th>
                    <th>Altura</th>
                    <th>Frontal</th>
                    <th>Trasero</th>
                    <th>X</th>
                </tr>
            </thead>
            <tbody>
                {props.pokemons && props.pokemons.length > 0 ? (
                    props.pokemons.map((item) => (
                        <PokemonItem
                            key={item.name}
                            name={item.name}
                            url={item.url}
                        />
                    ))
                ) : (
                    <tr>
                        <td colSpan={7}>No pokemons data</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default PokemonList;
