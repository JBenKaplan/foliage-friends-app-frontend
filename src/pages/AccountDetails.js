// import Client from '../services/api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UpdateAccount } from '../services/Account'
import DeleteAccount from '../components/DeleteAccount'

const AccountDetails = ({ user, handleLogOut }) => {
  let navigate = useNavigate()

  const inititialRenderedForm = {
    form: ''
  }
  const initialUpdateFormValues = {
    name: '',
    email: '',
    newPassword: '',
    confirmNewPassword: '',
    password: '',
    userId: ''
  }

  const [renderedForm, setRenderedForm] = useState(inititialRenderedForm)
  const [updateFormValues, setUpdateFormValues] = useState(
    initialUpdateFormValues
  )
  const [showDelete, setShowDelete] = useState(false)

  const handleChange = (e) => {
    setUpdateFormValues({
      ...updateFormValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      //check if new password=confirm New password
      if (
        updateFormValues.newPassword !== updateFormValues.confirmNewPassword
      ) {
        // let title = document.getElementsByClassName('update-title')[0].innerHTML
        // console.log(title)
        // title.innerHTML = toString('test')
        window.alert(
          'Update request failed. \nNew Password and Confirm New Password must match.'
        )
        return
      } else {
        //add userId to updateform value
        let updateBody = { ...updateFormValues, userId: user.id }
        //send update request with current pw, confirm pw on backend
        let res = await UpdateAccount(updateBody)
        console.log(res) // this is not working when pw does not match
      }

      // CLEAN UP
      //alert user that update was successful
      window.alert('SUCCESS! Account details updated. Please sign in again')
      // logout and navigate back to sign in
      handleLogOut()
      navigate('/login')
    } catch (error) {
      // let title = document.getElementsByClassName('update-title')[0].innerHTML
      // title.innerHTML =
      //   'Update request failed. \nCheck that your Current Password was entered correctly.'
      window.alert(
        'Update request failed. \nCheck that your Current Password was entered correctly.'
      )
      throw error
    }
  }

  // still not cascading to plants or rooms of the user
  // const deleteAccount = async (e) => {
  //   e.preventDefault()
  //   if (
  //     window.confirm(
  //       `Are you sure you want to delete you account?\nYou will lose all plants and rooms.`
  //     )
  //   ) {
  //     // JAL - wanted to do this as password protected, but delete requests do not allow req.body, so I wasn't sure where to put the pw... Still, token is stripped and verified prior to user deletion
  //     let res = await DeleteAccount(user.id)
  //     if (res) {
  //       console.log(res)
  //     }
  //     window.alert(`${res.message}\nSorry to see you go, ${user.name}`)
  //     handleLogOut()
  //     navigate('/register')
  //   }
  // }

  if (renderedForm.form === '') {
    return (
      <div className="account-container">
        <h1>Account</h1>
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => setRenderedForm({ form: 'updateAccount' })}
          >
            Update Account
          </button>
          <button className="btn" onClick={() => setShowDelete(true)}>
            Delete Account
          </button>
          <DeleteAccount
            onClose={() => setShowDelete(false)}
            user={user}
            show={showDelete}
          />
        </div>
      </div>
    )
  } else if (renderedForm.form === 'updateAccount') {
    return (
      <div className="account-container">
        <div className="update-title">Update Account</div>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={updateFormValues.name}
            placeholder="New User Name"
            id="updateName-input"
            name="name"
          />
          <input
            type="text"
            onChange={handleChange}
            value={updateFormValues.email}
            placeholder="New Email"
            id="updateEmail-input"
            name="email"
          />
          <input
            type="password"
            onChange={handleChange}
            value={updateFormValues.newPassword}
            placeholder="New Password"
            id="updatePassword-input"
            name="newPassword"
          />
          <input
            type="password"
            onChange={handleChange}
            value={updateFormValues.confirmNewPassword}
            placeholder="Confirm New Password"
            id="confirmUpdatePassword-input"
            name="confirmNewPassword"
          />
          <input
            type="password"
            onChange={handleChange}
            value={updateFormValues.password}
            placeholder="Current Password (required)"
            id="password-input"
            name="password"
            required
          />
          <div className="account">
            <button className="btn">Submit</button>
            <button
              className="btn"
              onClick={() => setRenderedForm(inititialRenderedForm)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }
}
export default AccountDetails
