import Pokemon from '@/components/Pokemon'
// import Footer from '@/components/Footer'
import HeaderPokedex from '@/components/HeaderPokedex'
import { useState } from 'react'

export default function PokemonPage() {

  return (
    <div>
    <HeaderPokedex />
    <Pokemon />
    {/* <Footer/> */}
    </div>
  )
}