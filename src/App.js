import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Landing from './components/Landing'
import LogIn from './components/LogIn'
import Register from './components/Register'
import AppTitle from './components/AppTitle'
import PlantGallery from './components/PlantGallery'
import Nav from './components/NavBar'

const App = () => {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  return (
    <div>
      <Nav user={user} handleLogOut={handleLogOut} />
      <AppTitle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LogIn setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plantgallery" element={<PlantGallery user={user} />} />
      </Routes>
    </div>
  )
}

export default App
