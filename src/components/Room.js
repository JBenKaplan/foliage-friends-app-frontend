const Room = () => {
  return (
    <div className="mainroom-container">
      <form className="form-container">
        <input type="text" placeholder="Room" id="room-input"></input>

        <label>
          <input
            type="file"
            src="./uploadimage.png"
            placeholder="upload image"
            id="image-input"
          ></input>
        </label>

        <input
          type="text"
          placeholder="Plant name"
          id="plantname-input"
        ></input>

        <textarea
          type="text"
          placeholder="Plant description"
          id="description-input"
        ></textarea>
        <button type="submit" className="roomform-submitbtn">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Room
