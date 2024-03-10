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
          <Link className='link' to='/context'>Context</Link>
          <Link className='link' to='/calculator'>InputCreate</Link>
          <Link className='link' to='/'>AboutUs</Link>
          <Link className='link' to='/'>News</Link>
          {!user ? (
            <><Link className='link' to='/login'>SignIn</Link><Link className='link' to='/register'>SignUp</Link></>
          ) : (
            <><Link className='link' to='/home'>Home</Link><Link className='link' to='/logout'>LogOut</Link></>
          )}
        </nav>
      </div>
    </header>
  )
}