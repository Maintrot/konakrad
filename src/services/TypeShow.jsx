import PokeLogoBug from '@/assets/pokelogos/PokeLogoBug'
import PokeLogoDragon from '@/assets/pokelogos/PokeLogoDragon'
import PokeLogoElectric from '@/assets/pokelogos/PokeLogoElectric'
import PokeLogoFairy from '@/assets/pokelogos/PokeLogoFairy'
import PokeLogoFighting from '@/assets/pokelogos/PokeLogoFighting'
import PokeLogoDark from '@/assets/pokelogos/PokeLogoDark'
import PokeLogoFire from '@/assets/pokelogos/PokeLogoFire'
import PokeLogoFlying from '@/assets/pokelogos/PokeLogoFlying'
import PokeLogoGhost from '@/assets/pokelogos/PokeLogoGhost'
import PokeLogoGrass from '@/assets/pokelogos/PokeLogoGrass'
import PokeLogoGround from '@/assets/pokelogos/PokeLogoGround'
import PokeLogoIce from '@/assets/pokelogos/PokeLogoIce'
import PokeLogoNormal from '@/assets/pokelogos/PokeLogoNormal'
import PokeLogoPoison from '@/assets/pokelogos/PokeLogoPoison'
import PokeLogoPsychic from '@/assets/pokelogos/PokeLogoPsychic'
import PokeLogoRock from '@/assets/pokelogos/PokeLogoRock'
import PokeLogoSteel from '@/assets/pokelogos/PokeLogoSteel'
import PokeLogoWater from '@/assets/pokelogos/PokeLogoWater'

export default function TypeShow(pokemon) {
  const viewTypes = pokemon.types.map((item) => {
    switch (item.type.name) {
      case 'bug':
        return (
          <>
            <PokeLogoBug/>
          </>
        );
      case 'dark':
        return (
          <>
            <PokeLogoDark/>
          </>
        );
      case 'dragon':
        return (
          <>
            <PokeLogoDragon/>
          </>
        );
      case 'electric':
        return (
          <>
            <PokeLogoElectric/>
          </>
        );
      case 'fairy':
        return (
          <>
            <PokeLogoFairy/>
          </>
        );
      case 'fighting':
        return (
          <>
            <PokeLogoFighting/>
          </>
        );
      case 'fire':
        return (
          <>
            <PokeLogoFire/>
          </>
        );
      case 'flying':
        return (
          <>
            <PokeLogoFlying/>
          </>
        );
      case 'ghost':
        return (
          <>
            <PokeLogoGhost/>
          </>
        );
      case 'grass':
        return (
          <>
            <PokeLogoGrass/>
          </>
        );
      case 'ground':
        return (
          <>
            <PokeLogoGround/>
          </>
        );
      case 'ice':
        return (
          <>
            <PokeLogoIce/>
          </>
        );
      case 'normal':
        return (
          <>
            <PokeLogoNormal/>
          </>
        );
      case 'poison':
        return (
          <>
            <PokeLogoPoison/>
          </>
        );
      case 'psychic':
        return (
          <>
            <PokeLogoPsychic/>
          </>
        );
      case 'rock':
        return (
          <>
            <PokeLogoRock/>
          </>
        );
      case 'steel':
        return (
          <>
            <PokeLogoSteel/>
          </>
        );
      case 'water':
        return (
          <>
            <PokeLogoWater/>
          </>
        );
      default:
        return (
          <>
          </>
        )
    }
  })
}