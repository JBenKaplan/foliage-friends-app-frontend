import { useState } from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router'
// import { useParams } from 'react-router-dom'

const RoomForm = ({ user, afterSubmitClick }) => {
  let navigate = useNavigate()

  const initialFormValues = {
    name: '',
    userId: user.id
  }

  const [formValues, setFormValues] = useState(initialFormValues)
  // const [room, setRoom] = useState({ formValues })

  const submitHandleClick = async (e) => {
    e.preventDefault()
    try {
      await Client.post('/rooms/create', { formValues })
      afterSubmitClick(formValues)
      setFormValues(initialFormValues)
    } catch (error) {
      throw error
    }
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (
    <div className="mainroom-formcontainer">
      <form className="roomform-container" onSubmit={submitHandleClick}>
        <h4 className="roomform-text">-Create New Room-</h4>
        <input
          onChange={handleChange}
          type="text"
          placeholder="New Room Name (required)"
          value={formValues.name}
          id="roomName"
          name="name"
          required
        ></input>
        <div className="formbtns">
          <button
            onClick={() => navigate('/editrooms')}
            className="roomform-submitbtn"
          >
            Edit Rooms
          </button>
          <button type="submit" value="value" className="roomform-submitbtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default RoomForm
