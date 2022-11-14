import { useState, useEffect } from 'react'
import axios from 'axios'
import Client from '../services/api'
// import { useParams } from 'react-router-dom'

const RoomForm = (props) => {
  const plantInfoForm = {
    room: '',
    image: '',
    name: '',
    details: ''
  }
  const [plantDetails, setPlantDetails] = useState({})

  const submitHandleClick = async (e) => {
    e.preventDefault()
    try {
      console.log(plantDetails)
      let res = await Client.post('/plants/create', {
        plantDetails
      })
      console.log(res)
    } catch (error) {
      throw error
    }

    props.afterPlantCreation(plantDetails)
    setPlantDetails(plantInfoForm)
  }

  const handleChange = (e) => [setPlantDetails({ ...plantInfoForm })]

  return (
    <div className="mainroom-container">
      <form className="form-container">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Room"
          value={plantDetails.room}
          id="room-input"
          name="room"
        ></input>

        <label>
          <input
            onChange={handleChange}
            type="file"
            src="./uploadimage.png"
            value={plantDetails.image}
            placeholder="upload image"
            id="image-input"
            name="image"
          ></input>
        </label>

        <input
          type="text"
          onChange={handleChange}
          value={plantDetails.name}
          placeholder="Plant name"
          id="plantname-input"
          name="name"
        ></input>

        <textarea
          onChange={handleChange}
          type="text"
          value={plantDetails.details}
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

export default RoomForm
