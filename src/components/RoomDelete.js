import React from 'react'
import Client from '../services/api'

const RoomDelete = (props) => {
  if (!props.show) {
    return null
  }

  const RemoveRoom = async (req) => {
    try {
      console.log(req)
      await Client.delete(`/rooms/room/${req}`)
      console.log(`Room removed with id of ${req}`)
      window.location.reload()
    } catch (err) {
      throw err
    }
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Are you sure you would like to delete this room?</h3>
        <h3>All plants will be deleted as well.</h3>
        <button className="noDeleteRoom" onClick={() => props.onClose()}>
          No
        </button>
        <button
          className="yesDeleteRoom"
          onClick={() => RemoveRoom(props.room.id)}
        >
          Yes
        </button>
      </div>
    </div>
  )
}
export default RoomDelete
