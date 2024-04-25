import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import ContextPage from '@/pages/ContextPage';
import CalculatorPage from '@/pages/CalculatorPage';
import LogInPage from '@/pages/LogInPage';
import LogOutPage from '@/pages/LogOutPage';
import RegisterPage from '@/pages/RegisterPage';
import ErrorPage from '@/pages/ErrorPage';
import ProfilePage from '@/pages/ProfilePage';
import PokemonPage from '@/pages/PokemonPage';
import PokedexPage from '@/pages/PokedexPage';

export default function Routers() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/context' element={<ContextPage/>}/>
        <Route path='/calculator' element={<CalculatorPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LogInPage/>}/>
        <Route path='/logout' element={<LogOutPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/pokedex' element={<PokedexPage/>} />
        <Route path='/pokemon/:pokeid' element={<PokemonPage/>} />
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}