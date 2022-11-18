import { useState } from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router'
// import { GetRooms } from '../services/Auth'
// import { useParams } from 'react-router-dom'

const PlantForm = ({ user, getAllPlants, roomList }) => {
  const formValues = {
    image: '',
    name: '',
    details: '',
    userId: '',
    roomId: ''
  }

  // const [rooms, setRooms] = useState(roomList)
  const [plantFormValues, setPlantFormValues] = useState(formValues)
  const navigate = useNavigate()

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
    setPlantFormValues({
      ...plantFormValues,
      [e.target.name]: e.target.value,
      userId: user.id
    })
  }

  // //useeffect get rooms
  // useEffect(() => {
  //   const RoomList = async () => {
  //     let roomslist = await GetRooms(user)
  //     setRooms(roomslist)
  //   }
  //   RoomList()
  // }, [])

  // const clickImage = (e) => {
  //   navigate('/plantdetails')
  // }

  return (
    <div className="mainroom-container">
      <form className="form-container" onSubmit={submitHandleClick}>
        <h4 className="roomform-text">-Create New Plant-</h4>
        <select
          onChange={handleChange}
          name="roomId"
          value={plantFormValues.roomId}
          required
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
          // onClick={clickImage}
          type="text"
          src="./uploadimage.png"
          value={plantFormValues.image}
          placeholder="image url"
          id="image-input"
          name="image"
        />

        <input
          type="text"
          onChange={handleChange}
          value={plantFormValues.name}
          placeholder="Plant name (required)"
          id="plantname-input"
          name="name"
          required
        />

        <textarea
          onChange={handleChange}
          type="text"
          value={plantFormValues.details}
          placeholder="Plant description"
          id="description-input"
          name="details"
        ></textarea>
        <button className="roomform-submitbtn">Submit</button>
      </form>
    </div>
  )
}

export default PlantForm
