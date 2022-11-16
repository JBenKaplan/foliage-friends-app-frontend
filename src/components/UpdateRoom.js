import { useEffect, useState } from 'react'
import Client from '../services/api'
import { useNavigate, useParams } from 'react-router'

const RoomForm = ({ user }) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const formValues = {
    name: '',
    roomId: ''
  }

  const [roomForm, setRoomForm] = useState(formValues)
  const [room, setRoom] = useState({})

  const GetRoomInfo = async () => {
    let changeroom = await Client.get(`/rooms/room/${id}`)
    setRoom(changeroom.data[0])
  }

  const handleChange = (e) => {
    setRoomForm({
      ...formValues,
      [e.target.name]: e.target.value,
      roomId: room.id
    })
  }

  const submitHandleClick = async (e) => {
    e.preventDefault()
    try {
      await Client.put(`/rooms/update`, {
        roomForm
      })
      navigate(-1)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    GetRoomInfo()
  }, [user])

  return (
    <div className="mainroom-formcontainer">
      <form className="roomform-container">
        <h4 className="roomform-text">-Current name: {room?.name}-</h4>
        <input
          onChange={handleChange}
          type="text"
          placeholder="New Name"
          value={roomForm.name}
          id="roomName"
          name="name"
        ></input>
        <div className="formbtns">
          <button
            onClick={submitHandleClick}
            type="submit"
            value="value"
            className="roomform-submitbtn"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default RoomForm
