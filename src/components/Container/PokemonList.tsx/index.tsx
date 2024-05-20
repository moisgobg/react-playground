import PokemonItem from "@/components/PokemonItem";
import { PaginatedResult } from "@/interfaces/api"

interface IPokemonListProps {
    children: React.ReactNode;
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
            {
                props.pokemons ? 
                props.pokemons.map( item => 
                    <PokemonItem 
                        key={item.name} 
                        name={item.name}
                        url={item.url}
                    />) :
                <tr>No pokemons data</tr>
            }
        </tbody>
    </table>
  )
}

export default PokemonList;