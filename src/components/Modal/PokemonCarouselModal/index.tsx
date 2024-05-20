import PokemonCarousel from '@/components/PokemonCarousel'
import { PaginatedResult } from '@/interfaces/api'
import ModalBase, { IModalBaseProps } from '../Base/ModalBase';

interface IPokemonCarouselModal extends Omit<IModalBaseProps, 'children'> {
    pokemons: PaginatedResult[];
}

const PokemonCarouselModal: React.FC<IPokemonCarouselModal> = (props) => {
    if (!props.pokemons) return null
    return (
        <ModalBase isOpen={props.isOpen} onClose={props.onClose}>
            <PokemonCarousel pokemons={props.pokemons} />
        </ModalBase>
    )
}

export default PokemonCarouselModal