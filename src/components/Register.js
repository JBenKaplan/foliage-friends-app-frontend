import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  let navigate = useNavigate()
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    passwordsMatch: true
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formValues.password !== formValues.confirmPassword) {
      setFormValues({ ...formValues, passwordsMatch: false })
    } else {
      let registerConfirmation = await RegisterUser({
        name: formValues.name,
        email: formValues.email,
        password: formValues.password
      })
      if (typeof registerConfirmation === 'string') {
        alert(
          `${registerConfirmation}\nPlease try signing in with that email or use a different email to Register`
        )
        setFormValues(initialState)
      } else {
        alert('Registration Success\nPlease sign in to use Foliage Friends')
        setFormValues(initialState)
        navigate('/login')
      }
    }
  }

  if (!formValues.passwordsMatch) {
    return (
      <div>
        <div className="signup-container">
          <h3>Password and Confirm Password Must match</h3>
          <button
            className="btn"
            onClick={() => {
              setFormValues(initialState)
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="signup-container">
        <div className="button-form-container">
          <button onClick={() => navigate('/login')} className="signup-btn">
            Sign In
          </button>
          <form className="register-container" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
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
                !formValues.email
                // !formValues.email ||
                // (!formValues.password &&
                //   formValues.confirmPassword === formValues.password)
              }
              className="signup-btn"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Register
