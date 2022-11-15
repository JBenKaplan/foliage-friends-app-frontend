import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PlantForm from './PlantForm.js'
import Client from '../services/api'
import RoomForm from './RoomForm.js'
import { GetRooms } from '../services/Auth.js'

const PlantGallery = ({ user }) => {
  // const formValues = {
  //   room: '',
  //   image: '',
  //   name: '',
  //   details: ''
  // }
  let navigate = useNavigate()

  // const [currentAddPlantState, setAddPlantState] = useState(false)
  // const [currentAddRoomState, setAddRoomState] = useState(false)
  const [currentAllPlants, setAllPlants] = useState([])
  const [rooms, setRooms] = useState([])

  console.log('rooms ', rooms, currentAllPlants)

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

  const getAllPlants = async () => {
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
    getAllPlants()
    RoomList()

    // initial render the user object is empty
    // after checkToken api call, the user will have data
    // before, even if the user has data, useEffect was not being executed again
    // useEffect dependencies is to ensure that execution will happen again if the user has data
  }, [user])

  console.log('Rooms ', rooms)

  return user ? (
    <div className="main-container">
      <div className="roomlist-container">
        <div className="addplantbtn-container">
          <button className="addplant-btn">Add Room</button>
          <button className="addplant-btn">Add Plant</button>
        </div>
        <div className={`dropdown-panel ${panelDisplay}`}>
          <RoomForm
            user={user}
            afterSubmitClick={(roomObj) => {
              // passing data from RoomForm to PlantGallery parent component
              // check RoomForm line 20
              setRooms([...rooms, roomObj])
            }}
          />
          <PlantForm
            user={user}
            roomList={rooms}
            getRooms={RoomList}
            getAllPlants={getAllPlants}
          />
        </div>
        <ul className="li-container">
          {rooms.map((room) => (
            <div key={room._id}>
              <h3>{room.name}</h3>
              <div className="plants">
                {currentAllPlants.map((plant) => {
                  if (parseInt(plant.roomId) === room.id) {
                    return (
                      <ul className="rooms-container">
                        <li className="rooms" key={plant.id}>
                          <p className="plant-name">{plant.name}</p>
                          <img src={plant.image} className="sampleplant-img" />
                        </li>
                      </ul>
                    )
                  }
                })}
              </div>
            </div>
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
