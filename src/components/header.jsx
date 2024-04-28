import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '@/App'
import VectorLogo from '@/assets/VectorLogo'
import style from '@/components/Header.module.css'

export default function Header() {
  const [user, setUser] = useContext(UserContext)

  return(
    <header>
      <div className='hdr_img'>
        <VectorLogo/>
      </div>
      <div className='hdr_nav'>
        <nav>
          <div>
            <Link className='link page' to='/context'>Context</Link>
            <Link className='link page' to='/calculator'>InputCreate</Link>
          </div>
          <div>
            <Link className='link home' to='/'>AboutUs</Link>
            <a className='link home' href='#news'>News</a>
          </div>
          {!user ? (
            <div><Link className='link auth' to='/login'>SignIn</Link><Link className='link auth' to='/register'>SignUp</Link></div>
          ) : (
            <div><Link className='link auth' to='/profile'>Profile</Link><Link className='link auth' to='/logout'>LogOut</Link></div>
          )}
          <div>
            <Link className='link page' to='/pokedex'>Pokedex</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}