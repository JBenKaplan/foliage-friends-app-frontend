import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { GetRooms } from '../services/Auth.js'
import Client from '../services/api.js'

const RoomsPage = ({ user }) => {
  const [rooms, setRooms] = useState([])

  let navigate = useNavigate()

  const RoomList = async () => {
    let roomslist = await GetRooms(user)
    setRooms(roomslist)
  }

  const RemoveRoom = async (req) => {
    // if (confirm('Are you sure you would like to remove this room?') === true) {
    try {
      console.log(req)
      await Client.delete(`/rooms/${req}`)
      console.log(`Room removed with id of ${req}`)
      window.location.reload()
    } catch (err) {
      throw err
    }
    // }
  }

  useEffect(() => {
    RoomList()
  }, [user])

  return (
    <div className="main-container">
      <h3>Edit Rooms</h3>
      <div className="roomList">
        {rooms.map((room) => (
          <div key={room._id} className="roomInfo">
            <h3>{room.name}</h3>
            <button onClick={() => RemoveRoom(room.id)}>X</button>
          </div>
        ))}
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  )
}

export default RoomsPage
