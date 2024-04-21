import axios from "axios"
import { useState, useEffect } from 'react'

export default function Pokedex() {
  const [pokedex, setPokedex] = useState([])
  const [pokedexPokemons, setPokedexPokemons] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const responce = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=3')

    if (responce?.data?.results) {
      // console.log(responce.data)
      responce.data.results.forEach((item) => {
        axios.get(item.url)
          .then((res) => {
            setPokedex((prevState) => {
              return [...prevState, {...res.data}]
            })
          })
      })
    }
  }

  const viewPokemon = pokedex.map((item, index) => {
    // console.log(item)
    return (
      <li key={index} >
        <div>
          <img src={item.sprites.other['official-artwork'].front_default} alt="pokemon_img" />
          <div>
            <h2>{item.name}</h2>
          </div>
        </div>
      </li>
    )
  })

  console.log(pokedex)

  return (
    <div>
      <div className="pokelist">
        <ul>
          {viewPokemon}
        </ul>
      </div>
    </div>
  )
}