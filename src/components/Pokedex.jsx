import style from '@/components/Pokedex.module.css'
import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function Pokedex() {
  const [pokedex, setPokedex] = useState([])
  const [status, setStatus] = useState(false)
  const [pokedexUnique, setPokedexUnique] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const responce = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=3')

    if (responce?.data?.results) {
      responce.data.results.forEach((item) => {
        axios.get(item.url)
          .then((res) => {
            setPokedex((prevState) => {
              return [...prevState, 
                {name: res.data.name, 
                id: res.data.id,
                img: res.data.sprites.other['official-artwork'].front_default}]
            })
          })
      })

      setStatus(true)

    }
  }

  useEffect(() => {
    unique(pokedex)
    console.log('useEffect')
  }, [status])

  async function unique(pokedex) {
    const pokeList = pokedex

    const uniqueList = Array.from(new Set(pokeList.map(JSON.stringify))).map(JSON.parse)
    
    console.log('qwe')
    console.log(uniqueList)

    setPokedexUnique(uniqueList)
  }

  const viewPokemon = pokedexUnique.map((item) => {
    return (
      <li key={item.id} >
        <Link to={'/pokemon/' + item.id}>
          <div className={style.pokelist_block}>
            <img src={item.img} alt="pokemon_img" />
            <div>
              <h2>{item.name}</h2>
            </div>
          </div>
        </Link>
      </li>
    )
  })

  console.log(pokedexUnique)

  return (
    <div>
      <div className={style.pokelist_grid}>
        <ul>
          {viewPokemon}
        </ul>
      </div>
    </div>
  )
}