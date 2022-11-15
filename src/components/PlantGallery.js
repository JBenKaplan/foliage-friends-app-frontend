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

  const [currentClickPlantState, setClickPlantState] = useState(false)

  const [currentAllPlants, setAllPlants] = useState([])
  const [rooms, setRooms] = useState([])

  const handleClick = async (e) => {
    if (currentClickPlantState === false) {
      setClickPlantState(true)
    } else {
      setClickPlantState(false)
    }
  }

  let panelDisplay = 'hide'
  if (currentClickPlantState === true) {
    panelDisplay = ''
  }

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

  return user ? (
    <div className="main-container">
      <div className="roomlist-container">
        <div className="addplantbtn-container">
          {/* <button className="addroom-btn">Add Room</button> */}
          <button onClick={handleClick} className="addplant-btn">
            Add
          </button>
        </div>
        <div className={`dropdown-panel ${panelDisplay}`}>
          <RoomForm
            user={user}
            afterSubmitClick={() => {
              let moreRoom = RoomList()
              setRooms([...moreRoom])
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
            <div key={room.id}>
              <h3>{room.name}</h3>
              <div className="plants">
                {currentAllPlants.map((plant) => {
                  if (parseInt(plant.roomId) === room.id) {
                    return (
                      <div className="plant-container">
                        <div className="plant" key={plant.id}>
                          <p className="plant-name">{plant.name}</p>
                          <img src={plant.image} className="sampleplant-img" />
                        </div>
                      </div>
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
