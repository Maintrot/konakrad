import { UserInfo } from '@/App'
import { useContext } from 'react'
import { ModalContext, ModalStatus } from '@/App'


export default function Profile() {
  const [userInfo, setUserInfo] = useContext(UserInfo)
  const [visible, setVisible] = useContext(ModalContext)
  const [status, setStatus] = useContext(ModalStatus)

  function changeAvatar() {
    setVisible(true)

    setStatus('userAvatar')
  }

  function changeInfo() {
    setVisible(true)

    setStatus('userInfo')
  }

  return(
    <div className="home">
      <div className="home_avatar">
        <div>
        </div>
        <h2>{userInfo.avatar}</h2>
        <button onClick={changeAvatar} className='change_btn'>change avatar</button>
      </div>
      <div className="home_user">
        <h1>user-info</h1>
        <ul>
          <li><h3>{userInfo.username}</h3></li>
          <li><h3>{userInfo.email}</h3></li>
          <li><h3>{userInfo.name}</h3></li>
          <li><h3>{userInfo.phone_number}</h3></li>
        </ul>
        <button onClick={changeInfo} className='change_btn'>change info</button>
      </div>
    </div>
  )
}