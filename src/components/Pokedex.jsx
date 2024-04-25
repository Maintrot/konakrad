import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function Pokedex() {
  const [pokedex, setPokedex] = useState([])
  const [pokedexIndexes, setPokedexIndexes] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const responce = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=3')

    if (responce?.data?.results) {
      // console.log(responce.data)
      responce.data.results.forEach(async (item) => {
        axios.get(item.url)
          .then((res) => {
            setPokedexIndexes()
            setPokedex((prevState) => {
              return [...prevState, {...res.data}]
            })
          })
      })
    }
  }

  const viewPokemon = pokedex.map((item) => {
    // console.log(item)
    return (
      <li key={item.id} >
        <Link to={'/pokemon/' + item.id}>
          <div>
            <img src={item.sprites.other['official-artwork'].front_default} alt="pokemon_img" />
            <div>
              <h2>{item.name}</h2>
            </div>
          </div>
        </Link>
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