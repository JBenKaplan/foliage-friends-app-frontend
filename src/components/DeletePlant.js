import React from 'react'
import { useNavigate } from 'react-router'
import Client from '../services/api'

const DeletePlant = (props) => {
  let navigate = useNavigate()
  if (!props.show) {
    return null
  }

  const RemovePlant = async (req) => {
    console.log(req)
    try {
      await Client.delete(`/plants/plant/${req}`)
      console.log(`Plant removed with id of ${req}`)
      navigate(-1)
    } catch (err) {
      throw err
    }
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Are you sure you would like to delete this plant?</h3>
        <button className="noDeletePlant" onClick={() => props.onClose()}>
          No
        </button>
        <button
          className="yesDeletePlant"
          onClick={() => RemovePlant(props.plant.id)}
        >
          Yes
        </button>
      </div>
    </div>
  )
}
export default DeletePlant
