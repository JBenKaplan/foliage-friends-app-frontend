import React from 'react'
import { useNavigate } from 'react-router'
import Client from '../services/api'

const DeleteAccount = (props) => {
  console.log(props)
  let navigate = useNavigate()
  console.log(props)
  if (!props.show) {
    return null
  }

  const RemoveAccount = async (req) => {
    console.log(req)
    try {
      // await Client.delete(`/users/user/${req}`)
      console.log(`User removed with id of ${req}`)
      navigate('/register')
    } catch (err) {
      throw err
    }
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Are you sure you would like to delete your account?</h3>
        <h3>You will lose all plants and rooms.</h3>
        <button className="noDeleteAccount" onClick={() => props.onClose()}>
          No
        </button>
        <button
          className="yesDeleteAccount"
          onClick={() => RemoveAccount(props.user.id)}
        >
          Yes
        </button>
      </div>
    </div>
  )
}
export default DeleteAccount
