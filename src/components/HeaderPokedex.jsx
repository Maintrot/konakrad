import style from '@/components/HeaderPokedex.module.css'
import { Link } from 'react-router-dom'
import { ModalPokemon } from '@/App'
import { useContext } from 'react'

export default function HeaderPokedex() {
  const [pokeActive, setPokeActive] = useContext(ModalPokemon)

  return(
    <div>
      <div className={style.header}>
        <div className={style.search_block}>
        </div>
        {!pokeActive ? (
          <>
            <div className={style.types_block}>
              <nav>
              </nav>
            </div>
          </>
        ) : (
          <>
            <div className={style.poke_back_block}>
              <Link to='/pokedex' className={style.poke_back} >Pokedex</Link>
            </div>
          </>
        )}
        <div className={style.back_block}>
          <Link to='/' className={style.back} >Back</Link>
        </div>
        <div className={style.logo_block}>
          <img className={style.logo} src="" alt="" />
        </div>
      </div>
    </div>
  )
}