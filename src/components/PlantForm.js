import { useState, useEffect } from 'react'
import Client from '../services/api'
import { GetRooms } from '../services/Auth'
// import { useParams } from 'react-router-dom'

const PlantForm = ({ user }) => {
  const formValues = {
    room: '',
    image: '',
    name: '',
    details: ''
  }

  const [rooms, setRooms] = useState([])
  const [plantFormValues, setPlantFormValues] = useState({})

  const submitHandleClick = async (e) => {
    e.preventDefault()
    try {
      let res = await Client.post('/plants/create', {
        plantFormValues
      })
    } catch (error) {
      throw error
    }
  }

  const handleChange = (e) => {
    setPlantFormValues({ ...plantFormValues, [e.target.name]: e.target.value })
  }

  //useeffect get rooms
  useEffect(() => {
    const getStuff = async () => {
      let roomslist = await GetRooms(user)
      setRooms(roomslist)
    }
    getStuff()
  }, [])

  return (
    <div className="mainroom-container">
      <form className="form-container">
        <label className="roomSelect" htmlFor="Select Room">
          Select Room:
          <select>
            <option value="" disabled>
              {''} - Select Room -{''}{' '}
            </option>
            {rooms.map((room) => (
              <option value={room.name} key={room.id}>
                {room.name}
              </option>
            ))}
          </select>
        </label>
        <input
          onChange={handleChange}
          // onClick={}
          type="file"
          src="./uploadimage.png"
          value={plantFormValues.image}
          placeholder="upload image"
          id="image-input"
          name="image"
        />

        <input
          type="text"
          onChange={handleChange}
          value={plantFormValues.name}
          placeholder="Plant name"
          id="plantname-input"
          name="name"
        />

        <textarea
          onChange={handleChange}
          type="text"
          value={plantFormValues.details}
          placeholder="Plant description"
          id="description-input"
          name="details"
        ></textarea>
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

export default PlantForm
