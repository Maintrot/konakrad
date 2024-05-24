import style from '@/components/Pokedex.module.css'
import axios from "axios"
import { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import { ModalPokemon, PokedexContext, SearchTermContext, SearchTypeContext, LoadedActiveContext } from '@/App'
import TypeShow from '@/services/TypeShow'
import PokePokeBall from '@/assets/pokelogos/PokePokeBall'

export default function Pokedex() {
  const [pokeActive, setPokeActive] = useContext(ModalPokemon)
  const [loadedActive, setLoadedActive] = useContext(LoadedActiveContext)

  const [pokedex, setPokedex] = useContext(PokedexContext)
  const [searchTerm, setSearchTerm] = useContext(SearchTermContext)
  const [searchType, setSearchType] = useContext(SearchTypeContext)

  const [loadPage, setLoadPage] = useState(true)
  const [pokedexUnique, setPokedexUnique] = useState([])

  useEffect(() => {
    if (loadedActive == 'notCompleted') {
      getData()
      setLoadedActive('completed')
    } else {
      setPokedexUnique(pokedex)
      setLoadPage(false)
    }
  }, [])

  async function getData() {
    try {
      const fetchPokemons = async (url) => {
        const response = await axios.get(url);
        if (response?.data?.results) {
          const pokemonPromises = response?.data?.results.map(async (item) =>
            axios.get(item.url).then(async (res) => ({
              name: res?.data?.name,
              id: res?.data?.id,
              types: res?.data?.types,
              img: res?.data?.sprites?.other['official-artwork']?.front_default,
            }))
          );
          return Promise.all(pokemonPromises);
        }
        return [];
      };
  
      let offset = 0;
      const limit = 200;
      const allPokemons = [];
  
      while (offset < 1000) {
        const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
        const pokemons = await fetchPokemons(url);
        allPokemons.push(...pokemons);
        offset += limit;
      }
  
      setPokedex(allPokemons);
      setPokedexUnique(allPokemons);
      setLoadPage(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function filterCardsByTerm(searchText, listOfCards) {
    if (!searchText) {
      return listOfCards
    }
    
    if (/^\d+$/.test(searchText)) {
      return listOfCards.filter(({id}) => String(id).includes(searchText))
    } else {
      return listOfCards.filter(({name}) => name.toLowerCase().includes(searchText.toLowerCase()))

    }
  }

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCards = filterCardsByTerm(searchTerm, pokedex)
      setPokedexUnique(filteredCards)
    }, 400)

    return () => clearTimeout(Debounce)
  }, [searchTerm])

  function filterCardsByType(searchType, listOfCards) {
    if (!searchType) {
      return listOfCards
    }
    return listOfCards.filter((list) => list?.types[0]?.type?.name.toLowerCase().includes(searchType.toLowerCase()))
  }

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCards = filterCardsByType(searchType, pokedex)
      setPokedexUnique(filteredCards)
    }, 400)

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
              <h1>{item?.id}</h1>
              <div>
                {item?.types?.map((item, index) => (
                  <li key={index}>
                    <TypeShow gay={item?.type?.name}/>
                  </li>
                ))}
              </div>
            </span>
            <span className={style.block_name}>
              <h2>{item?.name.toUpperCase()}</h2>
            </span>
            <div className={style.block_img}>
              <img src={item?.img} alt="pokemon_img" />
            </div>
            <div className={style.block_diver}>
              <h3>learn more</h3>
            </div>
          </div>
        </Link>
      </li>
    )
  })

  return (
    <div>
      {loadPage ? (
        <>
          <div>
            <PokePokeBall/>
          </div>
        </>
      ) : (
        <>
          <div className={style.pokelist_grid}>
        {viewPokemon}
          </div>
        </>
      )}
    </div>
  )
}