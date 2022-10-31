import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UserContextProvider } from './contexts/User'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
