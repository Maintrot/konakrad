import Register from '@/components/Register';
import { useState, createContext } from 'react'

export default function RegisterPage() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  return(
    <div>
      <Register propsFirstname={[firstname, setFirstname]} propsLastname={[lastname, setLastname]} propsUsername={[username, setUsername]} propsEmail={[email, setEmail]} propsPassword={[password, setPassword]} propsPasswordConfirm={[passwordConfirm, setPasswordConfirm]} />
    </div>
  )
}