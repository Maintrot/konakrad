import style from '@/components/Pokemon.module.css'
import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { HeaderColor, ModalContext, ModalPokemonContext, IdAbilityContext} from '@/App'
import TypeShow from '@/services/TypeShow'
import TypeColor from '@/services/TypeColor'
import PokePokeBall from '@/assets/pokelogos/PokePokeBall'

export default function Pokemon() {
  const [pokemonVisible, setPokemonVisible] = useContext(ModalPokemonContext)
  const [idAbility, setIdAbility] = useContext(IdAbilityContext)
  
  const [pokeActive, setPokeActive] = useContext(ModalContext)
  const [headerColor, setHeaderColor] = useContext(HeaderColor)

  const {pokeid} = useParams()
  const [loadPage, setLoadPage] = useState(true)
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    setPokeActive(true)
    getData()
  }, [])

  async function getData() {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeid}`)
    setPokemon(res.data)
    setLoadPage(false)
  }

    return (
      <>
        {loadPage ? (
          <>
            <PokePokeBall />
          </>
        ) : (
          <>
            <div className={style.pokemon}>
              <div className={style.pokemon_desc} id={style.left}>
                <div className={style.pokemon_text}>
                  <h3>ID</h3>
                  <p>{pokemon.id}</p>
                </div>
                <div className={style.pokemon_text}>
                  <h3>Height</h3>
                  <p>{pokemon.height}</p>
                </div>
                <div className={style.pokemon_text}>
                  <h3>Weight</h3>
                  <p>{pokemon.weight}</p>
                </div>
                <div className={style.pokemon_text} id={style.abilities}>
                  <h3>Abilities</h3>
                  {pokemon?.abilities?.map((item, index) => (
                    <li key={index}>
                      <div
                        className={style.ability_div}
                        onClick={() => {
                          setPokemonVisible(true);
                          setIdAbility(index);
                        }}
                      >
                        <h4
                          style={{
                            backgroundColor: headerColor,
                          }}
                        >
                          {item?.ability?.name.toUpperCase()}
                        </h4>
                      </div>
                    </li>
                  ))}
                </div>
                <div className={style.pokemon_text}>
                  <h3>Type</h3>
                  {pokemon?.types?.map((item, index) => (
                    <li key={index}>
                      <TypeShow gay={item.type.name} />
                      <TypeColor nigger={pokemon.types["0"].type.name} />
                    </li>
                  ))}
                </div>
              </div>
              <div className={style.pokemon_div}>
                <div className={style.pokemon_img}>
                  <img
                    src={
                      pokemon?.sprites?.other["official-artwork"]?.front_default
                    }
                    alt="pokemon img"
                  />
                </div>
                <h2>{pokemon.name.toUpperCase()}</h2>
              </div>
              <div className={style.pokemon_desc} id={style.right}>
                <h2>Stats</h2>
                <div className={style.pokemon_statText}>
                  {pokemon.stats?.map((item, index) => (
                    <li key={index}>
                      <span className={style.stat_name}>
                        {item.stat.name}:{" "}
                      </span>
                      <span className={style.stat_num}>{item.base_stat}</span>
                      <div
                        className={style.stat_line}
                        style={{
                          width: `${(item.base_stat * 2) + 100}%`,
                          backgroundColor: headerColor,
                        }}
                      ></div>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
}