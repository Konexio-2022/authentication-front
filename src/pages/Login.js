import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '../api/auth'
import { UserContext } from '../contexts/User'

const Login = () => {
  const navigate = useNavigate()
  const { setToken, user } = useContext(UserContext)
  const [email, setEmail] = useState('hello@hello.hello2')
  const [password, setPassword] = useState('security1234')

  useEffect(() => {
    if (user) {
      navigate('/profile')
    }
  }, [user])

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const user = {
      email,
      password
    }

    const { token } = await login(user)
    setToken(token)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={email} onChange={handleEmailChange} />
      <input type='password' value={password} onChange={handlePasswordChange} />
      <button type='submit'>Log in</button>
    </form>
  )
}

export default Login
