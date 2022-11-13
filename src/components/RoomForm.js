import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'

const RoomForm = (props) => {
  const [currentRoomInputValue, setRoomInputValue] = useState()
  const [currentImageInputValue, setImageInputValue] = useState()
  const [currentNameInputValue, setNameInputValue] = useState()
  const [currentTextInputValue, setTextInputValue] = useState()

  const submitHandleClick = async (e) => {
    e.preventDefault()
    const plantDetails = {
      room: currentRoomInputValue,
      image: currentImageInputValue,
      plantName: currentNameInputValue,
      plantDetails: currentTextInputValue
    }

    console.log('new plant test', plantDetails)

    // let response = await axios.post('http://localhost:3001/formDetails', {
    //   plantDetails
    // })

    props.afterPlantCreation(plantDetails)

    //clear the form
    setRoomInputValue('')
    setImageInputValue('')
    setNameInputValue('')
    setTextInputValue('')
  }

  const roomHandleChange = (e) => {
    setRoomInputValue(e.target.value)
  }

  const imageHandleChange = (e) => {
    setImageInputValue(e.target.value)
  }

  const nameHandleChange = (e) => {
    setNameInputValue(e.target.value)
  }

  const textHandleChange = (e) => {
    setTextInputValue(e.target.value)
  }

  return (
    <div className="mainroom-container">
      <form className="form-container">
        <input
          onChange={roomHandleChange}
          type="text"
          placeholder="Room"
          value={currentRoomInputValue}
          id="room-input"
        ></input>

        <label>
          <input
            onChange={imageHandleChange}
            type="file"
            src="./uploadimage.png"
            value={currentImageInputValue}
            placeholder="upload image"
            id="image-input"
          ></input>
        </label>

        <input
          type="text"
          onChange={nameHandleChange}
          value={currentNameInputValue}
          placeholder="Plant name"
          id="plantname-input"
        ></input>

        <textarea
          onChange={textHandleChange}
          type="text"
          value={currentTextInputValue}
          placeholder="Plant description"
          id="description-input"
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
