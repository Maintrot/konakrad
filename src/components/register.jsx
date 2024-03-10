import { useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '@/App.jsx'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

export default function Register(props) {
  const [firstname, setFirstname] = useState(props.propsFirstname)
  const [lastname, setLastname] = useState(props.propsLastname)
  const [username, setUsername] = useState(props.propsUsername)
  const [email, setEmail] = useState(props.propsEmail)
  const [password, setPassword] = useState(props.propsPassword)
  const [passwordConfirm, setPasswordConfirm] = useState(props.propsPasswordConfirm)
  const [user, setUser] = useContext(UserContext)
  const navigate = useNavigate()

  function setInputFirstname(event) {
    setFirstname(event.target.value)
  }
  function setInputLastname(event) {
    setLastname(event.target.value)
  }
  function setInputUsername(event) {
    setUsername(event.target.value)
  }
  function setInputEmail(event) {
    setEmail(event.target.value)
  }
  function setInputPassword(event) {
    setPassword(event.target.value)
  }
  function setInputPasswordConfirm(event) {
    setPasswordConfirm(event.target.value)
  }

  function back(event) {
    navigate('/')
  }

  async function sendForm(event) {
    event.preventDefault()

    const response = axios.post('http://127.0.0.1:8000/api/v1/auth/register/', {
      username: username,
      email: email,
      password: password,
      confirm_password: passwordConfirm,
      first_name: firstname,
      last_name: lastname
    })
      .then((res) => {
        console.log(res)
        setUser(true)

        navigate('/')
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
    <div className="back">
      <div className='register'>
        <form onSubmit={sendForm} method='post'>
          <h2>Register</h2>
          <label htmlFor="firstname">Firstname: </label><br/>
          <input onChange={setInputFirstname} type="text" name="firstname" placeholder="enter your firstname" /><br/>
          <label htmlFor="lastname">Lastname: </label><br/>
          <input onChange={setInputLastname} type="text" name="lastname" placeholder="enter your lastname" /><br/>
          <label htmlFor="name">Name: </label><br/>
          <input onChange={setInputUsername} type="text" name="username" placeholder="enter your username" /><br/>
          <label htmlFor="email">Email: </label><br/>
          <input onChange={setInputEmail} type="email" name="email" placeholder="enter your Email" /><br/>
          <label htmlFor="password">Password: </label><br/>
          <input onChange={setInputPassword} type="password" name="password" placeholder="enter your password" /><br/>
          <label htmlFor="password_again">Password again: </label><br/>
          <input onChange={setInputPasswordConfirm} type="password" name="password_again" placeholder="enter your password again" /><br/>
          <input className="submit" type="submit" value="submit" /><br/>
          <button onClick={back} className='op_next'>Back</button>
        </form>
      </div>
    </div>
  )
}