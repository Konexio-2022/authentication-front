import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../contexts/User'

const Profile = () => {
  const navigate = useNavigate()
  const { user, logout } = useContext(UserContext)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])

  return (
    <>
      <div>{user?.email}</div>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default Profile
