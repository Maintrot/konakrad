import { HeaderColor } from "@/App";
import { useContext } from "react";

export default function TypeColor(props) {
  const [headerColor, setHeaderColor] = useContext(HeaderColor)
  
  switch (props?.nigger) {
    case 'bug':
      setHeaderColor('#92bc2c')
      break
    case 'dark':
      setHeaderColor('#595761')
      break
    case 'dragon':
      setHeaderColor('#0c69c8')
      break
    case 'electric':
      setHeaderColor('#f2d94e')
      break
    case 'fairy':
      setHeaderColor('#ee90e6')
      break
    case 'fighting':
      setHeaderColor('#d3425f')
      break
    case 'fire':
      setHeaderColor('#fba54c')
      break
    case 'flying':
      setHeaderColor('#a1bbec')
      break
    case 'ghost':
      setHeaderColor('#5f6dbc')
      break
    case 'grass':
      setHeaderColor('#5fbd58')
      break
    case 'ground':
      setHeaderColor('#da7c4d')
      break
    case 'ice':
      setHeaderColor('#75d0c1')
      break
    case 'normal':
      setHeaderColor('#a0a29f')
      break
    case 'poison':
      setHeaderColor('#b763cf')
      break
    case 'psychic':
      setHeaderColor('#fa8581')
      break
    case 'rock':
      setHeaderColor('#c9bb8a')
      break
    case 'steel':
      setHeaderColor('#5695a3')
      break
    case 'water':
      setHeaderColor('#539ddf')
      break
    default:
      setHeaderColor('#f5f5f9')
  }
}

