import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import RoomDelete from '../components/RoomDelete.js'
import { GetRooms } from '../services/Auth.js'
// import Client from '../services/api.js'
// import RoomDelete from '../components/RoomDelete'

const RoomsPage = ({ user }) => {
  const [rooms, setRooms] = useState([])
  const [show, setShow] = useState(false)

  let navigate = useNavigate()

  const RoomList = async () => {
    let roomslist = await GetRooms(user)
    setRooms(roomslist)
  }

  useEffect(() => {
    RoomList()
  }, [user])

  return (
    <div className="rooms-container">
      <h3>Edit Rooms</h3>
      <div className="roomList">
        {rooms.map((room) => (
          <div key={room._id} className="roomInfo">
            <h3>{room.name}</h3>
            <button
              className="updateRoomBtn"
              onClick={() => navigate(`/updateroom/${room.id}`)}
            >
              Update
            </button>
            <button
              className="removeRoomBtn"
              // onClick={() => RemoveRoom(room.id)}
              onClick={() => setShow(true)}
            >
              X
            </button>
            <RoomDelete
              onClose={() => setShow(false)}
              show={show}
              room={room}
            />
          </div>
        ))}
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default RoomsPage
