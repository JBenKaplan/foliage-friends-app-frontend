import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  let navigate = useNavigate()
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/login')
  }
  return (
    <div>
      <form className="signup-container" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="name"
          name="name"
          className="signup-input"
          value={formValues.name}
          required
        ></input>
        <input
          type="text"
          placeholder="email"
          name="email"
          className="signup-input"
          onChange={handleChange}
          value={formValues.email}
          required
        ></input>
        <input
          type="password"
          placeholder="password"
          name="password"
          className="signup-input"
          onChange={handleChange}
          value={formValues.password}
          required
        ></input>
        <input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          className="signup-input"
          onChange={handleChange}
          value={formValues.confirmPassword}
          required
        ></input>

        <button
          disabled={
            !formValues.email ||
            (!formValues.password &&
              formValues.confirmPassword === formValues.password)
          }
          className="signup-btn"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Register
