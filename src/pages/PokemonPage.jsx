import Pokemon from '@/components/Pokemon'
import HeaderPokedex from '@/components/HeaderPokedex'
import ModalPokemon from '../components/ModalPolemon'

export default function PokemonPage() {

  return (
    <div>
    <HeaderPokedex />
    <Pokemon />
    <ModalPokemon/>
    </div>
  )
}