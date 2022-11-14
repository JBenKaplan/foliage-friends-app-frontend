import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PlantForm from './PlantForm.js'
import Client from '../services/api'
import RoomForm from './RoomForm.js'

const PlantGallery = ({ user }) => {
  const formValues = {
    room: '',
    image: '',
    name: '',
    details: ''
  }
  let navigate = useNavigate()

  const [currentAddPlantState, setAddPlantState] = useState(false)
  const [currentAddRoomState, setAddRoomState] = useState(false)
  const [currentAllPlants, setAllPlants] = useState([])

  const handleClick = async (e) => {
    if (currentAddPlantState === false || currentAddRoomState === true) {
      setAddPlantState(true)
      setAddRoomState(false)
    } else {
      setAddPlantState(false)
      setAddRoomState(true)
    }
  }

  let panelDisplay = 'hide'
  if (currentAddPlantState === true) {
    panelDisplay = ''
  }

  const getAllPlants = async (data) => {
    const res = await Client.get('/users/plants', data)
    console.log(res.data)
    setAllPlants(res.data)
  }

  useEffect(() => {
    getAllPlants()
  }, [])

  return user ? (
    <div className="main-container">
      <div className="roomlist-container">
        <div className="addplantbtn-container">
          <button onClick={handleClick} className="addplant-btn">
            Add Room
          </button>
          <button onClick={handleClick} className="addplant-btn">
            Add Plant
          </button>
        </div>
        <div className={`dropdown-panel-room ${panelDisplay}`}>
          <RoomForm user={user} />
        </div>
        <div className={`dropdown-panel-plant ${panelDisplay}`}>
          <PlantForm user={user} />
        </div>
        <ul className="li-container">
          {currentAllPlants.map((plant) => (
            <li className="rooms" key={plant.id}>
              <p className="room-text">{plant.room}</p>
              <p className="plant-name">{plant.name}</p>
              <img src={plant.image} className="sampleplant-img" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/login')}>Sign In</button>
    </div>
  )
}

export default PlantGallery
