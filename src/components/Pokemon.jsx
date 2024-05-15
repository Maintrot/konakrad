import style from '@/components/Pokemon.module.css'
import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { HeaderColor } from '@/App'

export default function Pokemon() {

  const [headerColor, setHeaderColor] = useContext(HeaderColor)

  const {pokeid} = useParams()
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeid}`)
    setPokemon(res.data)
  }

  // const viewTypes = pokemon.types.map((item) => {
  //   return (
  //     <>
  //       <div>{item.type.name}</div>
  //     </>
  //   )
  // })

  // const viewForms = pokemon.forms.map((item) => {
  //   return (
  //     <>
  //       <div>
  //         {item.name}
  //       </div>
  //     </>
  //   )
  // })


  console.log(pokemon)
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
            {pokemon.types?.map((item, index) => (
              <li key={index}>
                <p>{item.type.name}</p>
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
              <span className={style.stat_name}>{item.stat.name}</span>
              <span className={style.stat_num}>{item.base_stat}</span>
              <div className={style.stat_line}
              style={{
                width: `${item.base_stat}%`
              }}>
              </div>
            </li>
          ))}
        </div>
      </div>
    )
}

{/* <div className={style.pokemon_line}>
            <h3>HP</h3>
            <div>{pokemon?.stats['0'].base_stat}</div>
          </div>
          <div className={style.pokemon_line}>
            <h3>Attack</h3>
            <div>{pokemon?.stats['1'].base_stat}</div>
          </div>
          <div className={style.pokemon_line}>
            <h3>Defence</h3>
            <div>{pokemon?.stats['2'].base_stat}</div>
          </div>
          <div className={style.pokemon_line}>
            <h3>Sp.Attack</h3>
            <div>{pokemon?.stats['3'].base_stat}</div>
          </div>
          <div className={style.pokemon_line}>
            <h3>Sp.Defence</h3>
            <div>{pokemon?.stats['4'].base_stat}</div>
          </div>
          <div className={style.pokemon_line}>
            <h3>Speed</h3>
            <div>{pokemon?.stats['5'].base_stat}</div>
          </div>
          <div className={style.pokemon_line}>
            <h3>Total</h3>
            <div>{pokemon?.stats['0'].base_stat + pokemon?.stats['1'].base_stat + pokemon?.stats['2'].base_stat + pokemon?.stats['3'].base_stat + pokemon?.stats['4'].base_stat + pokemon?.stats['5'].base_stat}</div>
          </div> */}