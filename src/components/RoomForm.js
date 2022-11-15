import { useState } from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router'
// import { useParams } from 'react-router-dom'

const RoomForm = ({ user, afterSubmitClick }) => {
  let navigate = useNavigate()

  const formValues = {
    name: '',
    userId: user.id //ADD USERID BY AUTH!! CHANGE DAMN YOU??
  }

  const [room, setRoom] = useState({ formValues })

  const submitHandleClick = async (e) => {
    e.preventDefault()
    try {
      await Client.post('/rooms/create', {
        room
      })
      setRoom(formValues)
      afterSubmitClick(room)
    } catch (error) {
      throw error
    }
  }

  const handleChange = (e) => {
    setRoom({ ...formValues, [e.target.name]: e.target.value })
  }

  return (
    <div className="mainroom-container">
      <form className="form-container">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Room"
          value={room.name}
          id="room-input"
          name="name"
        ></input>
        <div className="formbtns">
          <button
            onClick={() => navigate('/editrooms')}
            className="roomform-submitbtn"
          >
            Edit Rooms
          </button>
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
