import { useState } from 'react'
import Client from '../services/api'
// import { GetRooms } from '../services/Auth'
// import { useParams } from 'react-router-dom'

const PlantForm = ({ user, getAllPlants, roomList }) => {
  const formValues = {
    image: '',
    name: '',
    details: '',
    userId: user.id,
    roomId: ''
  }

  // const [rooms, setRooms] = useState(roomList)
  const [plantFormValues, setPlantFormValues] = useState(formValues)

  const submitHandleClick = async (e) => {
    e.preventDefault()
    try {
      let res = await Client.post('/plants/create', {
        plantFormValues
      })
      setPlantFormValues(formValues)
      getAllPlants()
      console.log(res)
    } catch (error) {
      throw error
    }
  }

  const handleChange = (e) => {
    setPlantFormValues({ ...plantFormValues, [e.target.name]: e.target.value })
  }

  // //useeffect get rooms
  // useEffect(() => {
  //   const RoomList = async () => {
  //     let roomslist = await GetRooms(user)
  //     setRooms(roomslist)
  //   }
  //   RoomList()
  // }, [])

  return (
    <div className="mainroom-container">
      <form className="form-container">
        <select
          onChange={handleChange}
          name="roomId"
          value={plantFormValues.roomId}
        >
          <option value="" disabled>
            - Select Room -
          </option>
          {roomList.map((room) => (
            <option name="roomId" value={room.id} key={room.id}>
              {room.name}
            </option>
          ))}
        </select>
        <input
          onChange={handleChange}
          // onClick={}
          accept="image/*"
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
