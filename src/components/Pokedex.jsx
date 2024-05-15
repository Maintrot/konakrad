import style from '@/components/Pokedex.module.css'
import axios from "axios"
import { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import { ModalPokemon, PokedexContext } from '@/App'
import TypeShow from '../services/TypeShow'

export default function Pokedex() {
  const [pokeActive, setPokeActive] = useContext(ModalPokemon)

  const [pokedex, setPokedex] = useContext(PokedexContext)
  const [status, setStatus] = useState(false)
  const [pokedexUnique, setPokedexUnique] = useState([])

  function filterCards(searchText, listOfCards) {
    if (!searchText) {
      return listOfCards
    }
    return listOfCards.filter(({text}) => text.toLowerCase().includes(searchText.toLowerCase()))
  }

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const responce = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20')

    if (responce?.data?.results) {
      responce.data.results.forEach((item) => {
        axios.get(item.url)
          .then((res) => {
            setPokedex((prevState) => {
              return [...prevState, 
                {name: res.data.name, 
                id: res.data.id,
                types: res.data.types,
                img: res.data.sprites.other['official-artwork'].front_default}]
            })
          })
      })
    }
  }

  useEffect(() => {
    unique(pokedex)
    console.log('useEffect')
  }, [])

  function unique(pokedex) {
    const pokeList = pokedex

    const uniqueList = Array.from(new Set(pokeList.map(JSON.stringify))).map(JSON.parse)
    
    console.log('qwe')
    console.log(uniqueList)

    setPokedexUnique(uniqueList)
  }

  const viewPokemon = pokedex.map((item, index) => {

    return (
      <li key={index} >
        <Link className={style.link} onClick={() => {setPokeActive(true)}} to={'/pokemon/' + item.id}>
          <div className={style.pokelist_block}>
            <span className={style.block_title}>
              <h1>{item.id}</h1>
              <div>
                {item?.types?.map((item, index) => (
                  <li key={index}>
                    <TypeShow gay={item?.type?.name}/>
                  </li>
                ))}
              </div>
            </span>
            <span className={style.block_name}>
              <h2>{item.name}</h2>
            </span>
            <div className={style.block_img}>
              <img src={item.img} alt="pokemon_img" />
            </div>
            <div className={style.block_diver}>
              <h3>learn more</h3>
            </div>
          </div>
        </Link>
      </li>
    )
  })

  console.log(pokedex)

  return (
    <div>
      <div className={style.pokelist_grid}>
        {viewPokemon}
      </div>
    </div>
  )
}