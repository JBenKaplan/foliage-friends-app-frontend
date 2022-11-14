import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import LogIn from './components/LogIn'
import Register from './components/Register'
import AppTitle from './components/AppTitle'
import PlantGallery from './components/PlantGallery'
import PlantCard from './components/PlantGallery'

const App = () => {
  return (
    <div>
      <AppTitle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plantgallery" element={<PlantGallery />} />
        <Route path="/plantdetails/:id" element={<PlantCard />} />
      </Routes>
    </div>
  )
}

export default App
