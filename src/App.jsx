import Routers from '@/app/Routers'
import '@/App.css'
import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = createContext()
export const UserInfo = createContext()
export const ModalContext = createContext()
export const ModalStatus = createContext()
export const ModalPokemon = createContext()
export const HeaderColor = createContext()
export const PokedexContext = createContext()
export const SearchTermContext = createContext()
export const SearchTypeContext = createContext()
export const IdAbilityContext = createContext()
export const ModalPokemonContext = createContext()
export const LoadedActiveContext = createContext()

export default function App() {
  const [idAbility, setIdAbility] = useState(0)
  const [pokedex, setPokedex] = useState([])
  const [searchTerm, setSearchTerm] = useState('') 
  const [searchType, setSearchType] = useState('')
  const [pokemonVisible, setPokemonVisible] = useState(false)
  const [pokeActive, setPokeActive] = useState(false)
  const [loadedActive, setLoadedActive] = useState('notCompleted')

  const [headerColor, setHeaderColor] = useState('#f5f5f9')

  const [user, setUser] = useState(true)
  const [userInfo, setUserInfo] = useState({

  })
  const [visible, setVisible] = useState(false)
  const [status, setStatus] = useState('userAvatar')

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      checkUser(localStorage.getItem('access_token'))
    }

    if (localStorage.getItem('access_pokemon')) {
      setPokeActive(true)
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      checkUser(localStorage.getItem('access_token'))
    }
  }, [user])

  async function checkUser(access) {
    const access_token = localStorage.getItem('access_token')
    axios.defaults.headers.common = {'Authorization': `Bearer ${access_token}`}
    let response = axios.get('http://217.151.230.35:888/api/v1/regauth/user-info/')
      .then((res) => {
        setUser(true)
        setUserInfo(res.data)
        // console.log(res.data)
      })
      .catch((error) => {
        if (error.response) {
          console.error('Authentication failed. Server responded with:', error.response.data)
        } else if (error.request) {
          console.error('No response received from the server. Is the server running?')
        } else {
          console.error('Error setting up the request:', error.message)
        }
      })
  }

  return (
    <LoadedActiveContext.Provider value={[loadedActive, setLoadedActive]}>
      <IdAbilityContext.Provider value={[idAbility, setIdAbility]}>
        <ModalPokemonContext.Provider
          value={[pokemonVisible, setPokemonVisible]}
        >
          <SearchTermContext.Provider value={[searchTerm, setSearchTerm]}>
            <SearchTypeContext.Provider value={[searchType, setSearchType]}>
              <PokedexContext.Provider value={[pokedex, setPokedex]}>
                <HeaderColor.Provider value={[headerColor, setHeaderColor]}>
                  <ModalPokemon.Provider value={[pokeActive, setPokeActive]}>
                    <UserContext.Provider value={[user, setUser]}>
                      <ModalContext.Provider value={[visible, setVisible]}>
                        <ModalStatus.Provider value={[status, setStatus]}>
                          <UserInfo.Provider value={[userInfo, setUserInfo]}>
                            <Routers />
                          </UserInfo.Provider>
                        </ModalStatus.Provider>
                      </ModalContext.Provider>
                    </UserContext.Provider>
                  </ModalPokemon.Provider>
                </HeaderColor.Provider>
              </PokedexContext.Provider>
            </SearchTypeContext.Provider>
          </SearchTermContext.Provider>
        </ModalPokemonContext.Provider>
      </IdAbilityContext.Provider>
    </LoadedActiveContext.Provider>
  );
}