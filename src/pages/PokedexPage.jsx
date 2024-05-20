import Pokedex from '@/components/Pokedex'
// import Footer from '@/components/Footer'
import HeaderPokedex from '@/components/HeaderPokedex'
import { useState } from 'react'

export default function PokedexPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchType, setSearchType] = useState('')
  return (
    <div>
    <HeaderPokedex propsSearchTerm={[searchTerm, setSearchTerm]} propsSearchType={[searchType, setSearchType]} />
    <Pokedex propsSearchTerm={[searchTerm, setSearchTerm]} propsSearchType={[searchType, setSearchType]} />
    {/* <Footer/> */}
    </div>
  )
}