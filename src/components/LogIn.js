import { useNavigate } from 'react-router-dom'

const LogIn = () => {
  const navigate = useNavigate()

  const clickSignUp = (e) => {
    navigate('/register')
  }

  return (
    <div className="login-container">
      <div className="button-form-container">
        <button onClick={clickSignUp} className="signup-btn">
          Sign Up
        </button>

        <form className="signin-container">
          <h3 className="signin-text">Sign In</h3>
          <input
            type="text"
            id="email-input"
            className="signin-input"
            placeholder="email"
          ></input>
          <input
            type="text"
            id="password-input"
            className="signin-input"
            placeholder="password"
          ></input>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default LogIn
