import style from '@/components/Pokemon.module.css'
import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { HeaderColor, ModalContext} from '@/App'
import TypeShow from '@/services/TypeShow'
import TypeColor from '@/services/TypeColor'


export default function Pokemon(props) {
  
  const [pokeActive, setPokeActive] = useContext(ModalContext)
  const [headerColor, setHeaderColor] = useContext(HeaderColor)

  const {pokeid} = useParams()
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    setPokeActive(true)
    getData()
  }, [])

  async function getData() {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeid}`)
    setPokemon(res.data)
  }

  console.log(pokemon)
  console.log(pokeActive)
    return (
      <div className={style.pokemon}>
        <div className={style.pokemon_desc}>
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
          <div className={style.pokemon_color}>
            <h3>Type</h3>
            {pokemon?.types?.map((item, index) => (
              <li key={index}>
                <TypeShow gay={item.type.name}/>
                <TypeColor nigger={pokemon.types['0'].type.name} />
              </li>
            ))}
          </div>
          <div className={style.pokemon_color}>
            <h3>Forms</h3>
          </div>
        </div>
        <div className={style.pokemon_div}>
          <div className={style.pokemon_img}>
            <img src={pokemon?.sprites?.other['official-artwork']?.front_default} alt="pokemon img" />
          </div>
          <h2>{pokemon.name}</h2>
        </div>
        <div className={style.pokemon_desc}>
          <h2>Stats</h2>
          {pokemon.stats?.map((item, index) => (
            <li key={index}>
              <span className={style.stat_name}>{item.stat.name}: </span>
              <span className={style.stat_num}>{item.base_stat}</span>
              <div className={style.stat_line}
              style={{
                width: `${item.base_stat}%`,
                backgroundColor: headerColor,
              }}>
              </div>
            </li>
          ))}
        </div>
      </div>
    )
}