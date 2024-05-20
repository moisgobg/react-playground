import { PokemonDetails } from "@/interfaces/api";
// import styles from "./pokemon.details.modal.styles.module.css";
import ModalBase, { IModalBaseProps } from "../Base/ModalBase";

interface IPokemonDetailsModalProps extends Omit<IModalBaseProps, 'children'> {
    pokemon: PokemonDetails & {name: string};
}

const PokemonDetailsModal: React.FC<IPokemonDetailsModalProps> = (props) => {
  return (
    <ModalBase {...props}>
        <div>
            <div id="sprites">
                <img src={props.pokemon.sprites.front_default} alt="front_default" />
                <img src={props.pokemon.sprites.back_default} alt="back_default" />
            </div>
            <div>
                <p>Nombre: {props.pokemon.name}</p>
                <p>Peso: {props.pokemon.weight}</p>
                <p>Altura: {props.pokemon.height}</p>
            </div>
            <div>
                Movimientos..
            </div>
        </div>
    </ModalBase>
  )
}

export default PokemonDetailsModal