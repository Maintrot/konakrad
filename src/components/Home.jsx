import { UserInfo } from '@/App'
import { useContext } from 'react'

export default function Home() {
  const [userInfo, setUserInfo] = useContext(UserInfo)

  return(
    <div className="home">
      <div className="home_avatar">
        <div>
        </div>
        <h2>{userInfo.avatar}avatar</h2>
      </div>
      <div className="home_user">
        <h1>user-info</h1>
        <ul>
          <li><h3>{userInfo.username}maintrot</h3></li>
          <li><h3>{userInfo.email}maintrot0525@gmail.com</h3></li>
          <li><h3>{userInfo.name}Bayastan</h3></li>
          <li><h3>{userInfo.phone_number}0 555 04 44 36</h3></li>
        </ul>
      </div>
    </div>
  )
}