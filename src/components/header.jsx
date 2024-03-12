import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'

export default function Header() {
  const [user, setUser] = useContext(UserContext)

  return(
    <header>
      <div className='hdr_img'>
        <img src="../assets/Vector.svg" alt="Vector.svg" />
      </div>
      <div className='hdr_nav'>
        <nav>
          <div>
            <Link className='link page' to='/context'>Context</Link>
            <Link className='link page' to='/calculator'>InputCreate</Link>
          </div>
          <div>
            <Link className='link home' to='/'>AboutUs</Link>
            <Link className='link home' to='/'>News</Link>
          </div>
          {!user ? (
            <div><Link className='link auth' to='/login'>SignIn</Link><Link className='link auth' to='/register'>SignUp</Link></div>
          ) : (
            <div><Link className='link auth' to='/home'>Home</Link><Link className='link auth' to='/logout'>LogOut</Link></div>
          )}
        </nav>
      </div>
    </header>
  )
}