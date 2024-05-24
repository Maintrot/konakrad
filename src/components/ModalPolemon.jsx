import style from '@/components/ModalPokemon.module.css'
import axios from 'axios'
import { useState, useContext, useEffect} from 'react'
import { useParams, Link } from "react-router-dom"
import { ModalPokemonContext, IdAbilityContext, HeaderColor } from '@/App'

export default function ModalPokemon() {
  const {pokeid} = useParams()
  const [headerColor, setHeaderColor] = useContext(HeaderColor)
  const [pokemonVisible, setPokemonVisible] = useContext(ModalPokemonContext)
  const [pokemonModule, setPokemonModule] = useState({})
  const [pokemonAbilities, setPokemonAbilities] = useState([])
  const [idAbility, setIdAbility] = useContext(IdAbilityContext)

  useEffect(() => {
    const handleOutsideClick = (event) => {
        if (event.target.classList.contains('modal')) {
            setPokemonVisible(false);
        }
    };

    if (pokemonVisible) {
        document.addEventListener('click', handleOutsideClick);
    }

    return () => {
        document.removeEventListener('click', handleOutsideClick);
    };
}, [pokemonVisible, setPokemonVisible]);

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeid}`)
      setPokemonModule(res.data)
      const listOfAbilities = res?.data?.abilities
  
      if (listOfAbilities) {
        const abilitiesPromises = listOfAbilities.map((item) =>
          axios.get(item.ability.url).then(async (res) => (
            {
              game_description: res?.data?.flavor_text_entries.find(item => item.language.name == 'en')?.flavor_text ,
              effect: res?.data?.effect_entries[`0`]?.language?.name == 'en' ? 
              res?.data?.effect_entries[`0`]?.short_effect : res?.data?.effect_entries[`1`]?.short_effect,
              in_depth_effect: res?.data?.effect_entries[`0`]?.language?.name == 'en' ?
              res?.data?.effect_entries[`0`]?.effect : res?.data?.effect_entries[`1`]?.effect
            }
          ))
        )
        const abilities = await Promise.all(abilitiesPromises);
        setPokemonAbilities(abilities);
      }
    } catch(error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
      {!pokemonVisible ? (
        <></>
      ) : (
        <>
          <div className="modal">
            <div className={style.modalWindow}>
              <div className={style.modal_notmain}>
                <h2>
                  {pokemonModule?.abilities[`${idAbility}`]?.ability?.name.toUpperCase()}
                </h2>
              </div>
              <div className={style.modal_main}>
                <h3
                  style={{
                    backgroundColor: headerColor,
                  }}
                >
                  GAME DESCRIPTION
                </h3>
                <h4>{pokemonAbilities[`${idAbility}`]?.game_description}</h4>
                <h3
                  style={{
                    backgroundColor: headerColor,
                  }}
                >
                  EFFECT
                </h3>
                <h4>{pokemonAbilities[`${idAbility}`]?.effect}</h4>
                <h3
                  style={{
                    backgroundColor: headerColor,
                  }}
                >
                  IN-DEPTH EFFECT
                </h3>
                <h4>{pokemonAbilities[`${idAbility}`]?.in_depth_effect}</h4>
              </div>
              <div className={style.modal_notmain}>
                <button onClick={() => setPokemonVisible(false)}>Close</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}