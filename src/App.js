import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import LogIn from './components/LogIn'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LogIn />} />
        {/* <Route path="/register/" element={<Register />} />
        <Route path="/plantgallery/" element={<PlantGallery />} /> */}
      </Routes>
    </div>
  )
}

export default App
