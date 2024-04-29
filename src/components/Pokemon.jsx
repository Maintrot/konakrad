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

console.log(pokemon)
  return (
    <div className={style.pokemon_div}>
      <div className={style.pokemon_img}>
        <img src={pokemon?.sprites?.other['official-artwork']?.front_default} alt="pokemon img" />
      </div>
      <h2>{pokemon.name}</h2>
    </div>
  )
}