import style from '@/components/Pokedex.module.css'
import axios from "axios"
import { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import { ModalPokemon, PokedexContext, SearchTermContext, SearchTypeContext } from '@/App'
import TypeShow from '../services/TypeShow'

export default function Pokedex(props) {
  const [pokeActive, setPokeActive] = useContext(ModalPokemon)

  const [pokedex, setPokedex] = useContext(PokedexContext)
  const [searchTerm, setSearchTerm] = useContext(SearchTermContext)
  const [searchType, setSearchType] = useContext(SearchTypeContext)

  const [status, setStatus] = useState(false)
  const [pokedexUnique, setPokedexUnique] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=100');
      const results = response?.data?.results;

      if (results) {
        const pokemonPromises = results.map((item) =>
          axios.get(item.url).then((res) => ({
            name: res.data.name,
            id: res.data.id,
            types: res.data.types,
            img: res.data.sprites.other['official-artwork'].front_default,
          }))
        );

        const pokemons = await Promise.all(pokemonPromises);
        setPokedex(pokemons);
        // Вызов другой функции после завершения getData
        unique(pokemons);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async function unique(pokedex) {
    const pokeList = pokedex

    const uniqueList = Array.from(new Set(pokeList.map(JSON.stringify))).map(JSON.parse)

    setPokedex(uniqueList)
    setPokedexUnique(uniqueList)
  }

  function filterCardsByTerm(searchText, listOfCards) {
    if (!searchText) {
      return listOfCards
    }
    
    if (/^\d+$/.test(searchText)) {
      console.log(Number(searchText))
      return listOfCards.filter(({id}) => String(id).includes(searchText))
    } else {
      console.log(searchText)
      return listOfCards.filter(({name}) => name.toLowerCase().includes(searchText.toLowerCase()))

    }
  }

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCards = filterCardsByTerm(searchTerm, pokedex)
      setPokedexUnique(filteredCards)
    }, 300)

    return () => clearTimeout(Debounce)
  }, [searchTerm])

  function filterCardsByType(searchType, listOfCards) {
    if (!searchType) {
      return listOfCards
    }
    return listOfCards.filter((list) => list.types[0].type.name.toLowerCase().includes(searchType.toLowerCase()))
  }

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCards = filterCardsByType(searchType, pokedex)
      setPokedexUnique(filteredCards)
    }, 300)

    return () => clearTimeout(Debounce)
  }, [searchType])

  const viewPokemon = pokedexUnique.map((item, index) => {

    return (
      <li key={index} >
        <Link className={style.link} onClick={() => 
          {setPokeActive(true)
            localStorage.setItem('access_pokemon', true)
          }} to={'/pokemon/' + item.id}>
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