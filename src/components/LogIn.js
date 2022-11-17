import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SignInUser } from '../services/Auth'

const LogIn = ({ setUser }) => {
  const navigate = useNavigate()

  const clickSignUp = (e) => {
    navigate('/register')
  }

  const initialState = { email: '', password: '' }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    console.log(payload)
    setUser(payload)
    setFormValues(initialState)
    navigate('/plantgallery')
  }

  return (
    <div className="login-container">
      <div className="button-form-container">
        <button onClick={clickSignUp} className="signup-btn">
          Register
        </button>

        <form className="signin-container">
          <h3 className="signin-text">Sign In</h3>
          <input
            onChange={handleChange}
            value={formValues.email}
            required
            type="text"
            name="email"
            className="signin-input"
            placeholder="email"
          ></input>
          <input
            onChange={handleChange}
            value={formValues.password}
            required
            type="password"
            name="password"
            className="signin-input"
            placeholder="password"
          ></input>
          <button onClick={handleSubmit} type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default LogIn
