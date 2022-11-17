import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router'

const UpdateForm = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [currentUpdate, setUpdate] = useState({})
  console.log(`${id}`)

  //page renders with previous values
  //get data
  //set current value, put current state
  // assign current state in form

  useEffect(() => {
    const getData = async () => {
      if (id !== undefined) {
        let response = await Client.get(`/plants/plant/${id}`)
        console.log(response.data)
        setUpdate(response.data)
      }
    }
    getData()
  }, [])

  const submitBtn = async (e) => {
    //if button is clicked, currentUpdate state/ data gets sent to API for update
    e.preventDefault()
    let response = await Client.put(`/plants/update/${id}`, currentUpdate)
    console.log(`Plant is updated with id of ${id}`)
    navigate(-1)
  }

  return (
    <div className="update-container">
      <img src={currentUpdate.image} className="update-image" />
      <form className="update-form">
        <h1>Update Details</h1>
        <p className="name-text">Plant name:</p>
        <input
          onChange={(e) => {
            const nameValue = e.target.value
            setUpdate({ ...currentUpdate, name: nameValue })
          }}
          type="text"
          value={currentUpdate.name}
          className="update-plantname"
        />
        <p className="updateroom-text">Room name:</p>
        <input
          onChange={(e) => {}}
          type="text"
          value={currentUpdate.room}
          className="update-roomname"
        />
        <p className="updatedetails-text">Details:</p>
        <input
          onChange={(e) => {
            const detailsValue = e.target.value
            setUpdate({ ...currentUpdate, details: detailsValue })
          }}
          type="text"
          value={currentUpdate.details}
          className="update-details"
        />

        <button onClick={submitBtn} className="update-submitbtn">
          Submit
        </button>
      </form>
    </div>
  )
}

export default UpdateForm
