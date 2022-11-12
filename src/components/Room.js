import { useState, useEffect } from 'react'

const Room = () => {
  const [currentSubmitValue, setSubmitValue] = useState()
  const [currentRoomInputValue, setRoomInputValue] = useState()
  const [currentImageInputValue, setImageInputValue] = useState()
  const [currentNameInputValue, setNameInputValue] = useState()
  const [currentTextInputValue, setTextInputValue] = useState()

  const submitHandleClick = (e) => {
    e.preventDefault()
    console.log(
      'submit click',
      currentRoomInputValue,
      currentImageInputValue,
      currentNameInputValue,
      currentTextInputValue
    )
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

export default Room
