import style from '@/components/Pokemon.module.css'
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router"

export default function Pokemon() {

  const url = useParams()
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/' + url.pokeid)
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
      <div>
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
          <div className={style.pokemon_line}>
            <h3>HP</h3>
            <div>{pokemon.stats['0'].base_stat}</div>
          </div>
          <div className={style.pokemon_line}>
            <h3>Attack</h3>
            <div>{pokemon.stats['1'].base_stat}</div>
          </div>
          <div className={style.pokemon_line}>
            <h3>Defence</h3>
            <div>{pokemon.stats['2'].base_stat}</div>
          </div>
          <div className={style.pokemon_line}>
            <h3>Sp.Attack</h3>
            <div>{pokemon.stats['3'].base_stat}</div>
          </div>
          <div className={style.pokemon_line}>
            <h3>Sp.Defence</h3>
            <div>{pokemon.stats['4'].base_stat}</div>
          </div>
          <div className={style.pokemon_line}>
            <h3>Speed</h3>
            <div>{pokemon.stats['5'].base_stat}</div>
          </div>
          <div className={style.pokemon_line}>
            <h3>Total</h3>
            <div>{pokemon.stats['0'].base_stat + pokemon.stats['1'].base_stat + pokemon.stats['2'].base_stat + pokemon.stats['3'].base_stat + pokemon.stats['4'].base_stat + pokemon.stats['5'].base_stat}</div>
          </div>
        </div>
      </div>
    )
}