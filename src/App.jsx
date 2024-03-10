import Routers from '@/app/Routers'
import '@/App.css'
import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = createContext()

export default function App() {

  const [user, setUser] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      checkUser(localStorage.getItem('access_token'))
    }
  }, [])

  async function checkUser(access) {
    let res = axios.post('', config)
      .then((res) => {
        setUser(true)
      })
      .catch((error) => {
        if (error.response) {
          console.error('Authentication failed. Server responded with:', error.response.data)
        } else if (error.request) {
          console.error('No response received from the server. Is the server running?')
        } else {
          console.error('Error setting up the request:', error.message)
        }
      })
  }

  return(
    <UserContext.Provider value={[user, setUser]}>
      <Routers/>
    </UserContext.Provider>
  )
}