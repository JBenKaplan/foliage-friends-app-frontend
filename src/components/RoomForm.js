import { useState } from 'react'
import Client from '../services/api'
// import { useParams } from 'react-router-dom'

const RoomForm = ({ user, afterSubmitClick }) => {
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
    <div className="mainroom-formcontainer">
      <form className="roomform-container">
        <h4 className="roomform-text">-create new room-</h4>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Room"
          value={room.name}
          id="room-input"
          name="name"
        ></input>
        <button
          onClick={submitHandleClick}
          type="submit"
          value="value"
          className="roomform-submitbtn"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default RoomForm
