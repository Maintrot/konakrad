import style from '@/components/HeaderPokedex.module.css'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { HeaderColor, SearchTypeContext, SearchTermContext, ModalPokemon } from '@/App'
import PokeLogoBug from '@/assets/pokelogos/PokeLogoBug'
import PokeLogoDragon from '@/assets/pokelogos/PokeLogoDragon'
import PokeLogoElectric from '@/assets/pokelogos/PokeLogoElectric'
import PokeLogoFairy from '@/assets/pokelogos/PokeLogoFairy'
import PokeLogoFighting from '@/assets/pokelogos/PokeLogoFighting'
import PokeLogoDark from '@/assets/pokelogos/PokeLogoDark'
import PokeLogoFire from '@/assets/pokelogos/PokeLogoFire'
import PokeLogoFlying from '@/assets/pokelogos/PokeLogoFlying'
import PokeLogoGhost from '@/assets/pokelogos/PokeLogoGhost'
import PokeLogoGrass from '@/assets/pokelogos/PokeLogoGrass'
import PokeLogoGround from '@/assets/pokelogos/PokeLogoGround'
import PokeLogoIce from '@/assets/pokelogos/PokeLogoIce'
import PokeLogoNormal from '@/assets/pokelogos/PokeLogoNormal'
import PokeLogoPoison from '@/assets/pokelogos/PokeLogoPoison'
import PokeLogoPsychic from '@/assets/pokelogos/PokeLogoPsychic'
import PokeLogoRock from '@/assets/pokelogos/PokeLogoRock'
import PokeLogoSteel from '@/assets/pokelogos/PokeLogoSteel'
import PokeLogoWater from '@/assets/pokelogos/PokeLogoWater'
import VectorStrelka from '@/assets/VectorStrelka'


export default function HeaderPokedex() {
  const [searchTerm, setSearchTerm] = useContext(SearchTermContext)
  const [searchType, setSearchType] = useContext(SearchTypeContext)
  const [pokeActive, setPokeActive] = useContext(ModalPokemon)
  const [headerColor, setHeaderColor] = useContext(HeaderColor)

  useEffect(() => {
    if (!pokeActive) {
      setHeaderColor('#f5f5f9')
    }
  })

  return (
    <>
      <div
        className={style.header_fixed}
        style={{
          backgroundColor: headerColor,
        }}
      >
        <div className={style.back_block}>
          <Link
            className={style.link}
            onClick={() => {
              setPokeActive(false);
            }}
            to="/"
          >
            <VectorStrelka/>
          </Link>
        </div>
        {!pokeActive ? (
          <>
            <div className={style.types_block}>
              <nav>
                <PokeLogoBug />
                <PokeLogoDark />
                <PokeLogoDragon />
                <PokeLogoElectric />
                <PokeLogoFairy />
                <PokeLogoFighting />
                <PokeLogoFire />
                <PokeLogoFlying />
                <PokeLogoGhost />
                <PokeLogoGrass />
                <PokeLogoGround />
                <PokeLogoIce />
                <PokeLogoNormal />
                <PokeLogoPoison />
                <PokeLogoPsychic />
                <PokeLogoRock />
                <PokeLogoSteel />
                <PokeLogoWater />
              </nav>
            </div>
            <div className={style.search_block}>
              <input
                value={searchTerm}
                type="text"
                autoFocus
                autoComplete="off"
                placeholder="Find your pokemon"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              <button onClick={() => setSearchType("")}>clear type</button>
              <h4>{searchType}</h4>
            </div>
          </>
        ) : (
          <>
            <div className={style.poke_back_block}>
              <Link
                className={style.link}
                onClick={() => {
                  setPokeActive(false);
                  localStorage.removeItem("access_pokemon");
                  setSearchType("");
                }}
                to="/pokedex"
              >
                <button>pokedex</button>
              </Link>
            </div>
          </>
        )}
      </div>
      <div className={style.header_normal}></div>
    </>
  );
}