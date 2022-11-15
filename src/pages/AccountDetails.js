// import Client from '../services/api'
// import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DeleteAccount } from '../services/Account'

const AccountDetails = ({ user, handleLogOut }) => {
  let navigate = useNavigate()

  const deleteAccount = async (e) => {
    e.preventDefault()
    if (
      window.confirm(
        `Are you sure you want to delete you account?\nYou will lose all plants and rooms.`
      )
    ) {
      // JAL - wanted to do this as password protected, but delete requests do not allow req.body, so I wasn't sure where to put the pw... Still, token is stripped and verified prior to user deletion
      await DeleteAccount(user.id)
      window.alert(`sorry to see you go, ${user.email}`)
      handleLogOut()
      navigate('/register')
    }
  }

  return (
    <div className="account-container">
      <h1>Account</h1>
      <div className="btn-container">
        <button className="btn">Update Name</button>
        <button className="btn">Update Email</button>
        <button className="btn">Update Password</button>
        <button className="btn" onClick={deleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  )
}

export default AccountDetails
