import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PlantForm from './PlantForm.js'
import Client from '../services/api'
import RoomForm from './RoomForm.js'
import { GetRooms } from '../services/Auth.js'

const PlantGallery = ({ user }) => {
  const formValues = {
    room: '',
    image: '',
    name: '',
    details: ''
  }
  let navigate = useNavigate()

  // const [currentAddPlantState, setAddPlantState] = useState(false)
  // const [currentAddRoomState, setAddRoomState] = useState(false)
  const [currentRoomPlants, setAllPlants] = useState([])
  const [rooms, setRooms] = useState([])

  // const handleClick = async (e) => {
  //   if (currentAddPlantState === false || currentAddRoomState === true) {
  //     setAddPlantState(true)
  //     setAddRoomState(false)
  //   } else {
  //     setAddPlantState(false)
  //     setAddRoomState(true)
  //   }
  // }

  let panelDisplay = 'show'
  // if (currentAddPlantState === true) {
  //   panelDisplay = ''
  // }

  const getRoomPlants = async () => {
    // console.log(room)
    const res = await Client.get(`/plants/all`)
    // console.log(res.data)
    setAllPlants(res.data)
  }

  const RoomList = async () => {
    let roomslist = await GetRooms(user)
    setRooms(roomslist)
  }

  useEffect(() => {
    getRoomPlants()
    RoomList()
  }, [])

  return user ? (
    <div className="main-container">
      <div className="roomlist-container">
        <div className="addplantbtn-container">
          <button className="addplant-btn">Add Room</button>
          <button className="addplant-btn">Add Plant</button>
        </div>
        <div className={`dropdown-panel ${panelDisplay}`}>
          <RoomForm user={user} />
          <PlantForm user={user} rooms={rooms} getRooms={RoomList} />
        </div>
        <div className="li-container">
          {rooms.map((roomData) => (
            <div key={roomData.name}>
              <h3>{roomData.name}</h3>
              <div className="plants">
                {/* {getRoomPlants(roomData)} */}
                {currentRoomPlants.map((plant) => (
                  <div className="plantInfo" key={plant.id}>
                    <p className="plant-name">{plant.name}</p>
                    <img src={plant.image} className="sampleplant-img" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
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
