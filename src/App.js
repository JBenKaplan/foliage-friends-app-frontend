import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Landing from './components/Landing'
import LogIn from './components/LogIn'
import Register from './components/Register'
import AppTitle from './components/AppTitle'
import PlantGallery from './components/PlantGallery'
import PlantCard from './components/PlantCard'
import Nav from './components/NavBar'
import AccountDetails from './pages/AccountDetails'
import RoomsPage from './pages/RoomsPage'
import UpdateRoom from './components/UpdateRoom'

const App = () => {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <Nav user={user} handleLogOut={handleLogOut} />
      <AppTitle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LogIn setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plantgallery" element={<PlantGallery user={user} />} />
        <Route path="/plantdetails/:id" element={<PlantCard user={user} />} />

        <Route
          path="/accountdetails"
          element={<AccountDetails user={user} handleLogOut={handleLogOut} />}
        />
        <Route path="/editrooms" element={<RoomsPage user={user} />} />
        <Route path="/updateroom/:id" element={<UpdateRoom user={user} />} />
      </Routes>
    </div>
  )
}

export default App
