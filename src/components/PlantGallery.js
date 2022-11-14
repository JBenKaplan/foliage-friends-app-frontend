import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import plantImage from './sampleplant.png'
import RoomForm from './RoomForm.js'

const PlantGallery = (props) => {
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

  useEffect(() => {
    //fetch api
    const getAllPlants = async () => {
      //axios.get()
      // update currentAllPlants
      //setAllPlants
    }
    getAllPlants()
  })

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
          {currentAllPlants.map((galleryItem) => {
            return (
              <li className="rooms">
                <p className="room-text">{galleryItem.room}</p>
                <p className="plant-name">{galleryItem.plantName}</p>
                <img src={galleryItem.plantImage} className="sampleplant-img" />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PlantGallery
