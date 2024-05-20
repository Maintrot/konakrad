import style from '@/pages/TestPage.module.css'
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

export default function TestPage() {
  return(
    <>
    <div className={style.background}>
      <div className={style.blue_block}></div>
      <div className={style.gridtest_grid}>
        <div className={style.gridtest_block}>
          <div className={style.gridtest_blockdiver}>
            <h2>Hi man</h2>
          </div>
        </div>
        <div className={style.gridtest_block}>
          <div className={style.gridtest_blockdiver}>
            <h2>Hi man</h2>
          </div>
        </div>
        <div className={style.gridtest_block}>
          <div className={style.gridtest_blockdiver}>
            <h2>Hi man</h2>
          </div>
        </div>
        <div className={style.gridtest_block}>
          <div className={style.gridtest_blockdiver}>
            <h2>Hi man</h2>
          </div>
        </div>
        <div className={style.gridtest_block}>
          <div className={style.gridtest_blockdiver}>
            <h2>Hi man</h2>
          </div>
        </div>
        <div className={style.gridtest_block}>
          <div className={style.gridtest_blockdiver}>
            <h2>Hi man</h2>
          </div>
        </div>
        <div className={style.gridtest_block}>
          <div className={style.gridtest_blockdiver}>
            <h2>Hi man</h2>
          </div>
        </div>
        <div className={style.gridtest_block}>
          <div className={style.gridtest_blockdiver}>
            <h2>Hi man</h2>
          </div>
        </div>
      </div>
      <div className={style.visual_flex}>
        <div className={style.visual_block} id={style.id_visual_blockleft}>
          <h1>left</h1>
          <h2>left</h2>
          <h3>left</h3>
          <h4>left</h4>
        </div>
        <div className={style.visual_block} id={style.id_visual_blockright}>
          <h1>right</h1>
          <h2>right</h2>
          <h3>right</h3>
          <h4>right</h4>
        </div>
      </div>
      <button className={style.button}>click me</button>
      <PokeLogoBug/>
      <PokeLogoDark/>
      <PokeLogoDragon/>
      <PokeLogoElectric/>
      <PokeLogoFairy/>
      <PokeLogoFighting/>
      <PokeLogoFire/>
      <PokeLogoFlying/>
      <PokeLogoGhost/>
      <PokeLogoGrass/>
      <PokeLogoGround/>
      <PokeLogoIce/>
      <PokeLogoNormal/>
      <PokeLogoPoison/>
      <PokeLogoPsychic/>
      <PokeLogoRock/>
      <PokeLogoSteel/>
      <PokeLogoWater/>
    </div>
    </>
  )
}