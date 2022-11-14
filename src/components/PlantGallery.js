import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RoomForm from './RoomForm.js'
import Client from '../services/api'

const PlantGallery = ({ user }) => {
  const formValues = {
    room: '',
    image: '',
    name: '',
    details: ''
  }
  let navigate = useNavigate()

  const [currentAddPlantState, setAddPlantState] = useState(false)
  const [currentAllPlants, setAllPlants] = useState([])

  const addPlantHandleClick = async (e) => {
    if (currentAddPlantState === false) {
      setAddPlantState(true)
    } else {
      setAddPlantState(false)
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

  return (
    <div className="main-container">
      <div className="roomlist-container">
        <div className="addplantbtn-container">
          <button onClick={addPlantHandleClick} className="addplant-btn">
            ADD PLANT
          </button>
        </div>
        <div className={`dropdown-panel ${panelDisplay}`}>
          <RoomForm
            afterPlantCreation={(plantObj) => {
              console.log('plant is now created', plantObj)
              const newPlants = [...currentAllPlants, plantObj]
              setAllPlants(newPlants)
            }}
          />
        </div>
        <ul className="li-container">
          {currentAllPlants.map((galleryItem) => (
            <li className="rooms">
              <p className="room-text">{galleryItem.room}</p>
              <p className="plant-name">{galleryItem.name}</p>
              <img src={galleryItem.image} className="sampleplant-img" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
  // ) : (
  //   <div className="protected">
  //     <h3>Oops! You must be signed in to do that!</h3>
  //     <button onClick={() => navigate('/login')}>Sign In</button>
  //   </div>
  // )
}

export default PlantGallery
