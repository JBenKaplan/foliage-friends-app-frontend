const Register = () => {
  return (
    <div>
      <form className="signup-container">
        <input
          type="text"
          placeholder="name"
          id="name-input"
          className="signup-input"
        ></input>
        <input
          type="text"
          placeholder="email"
          id="email-input"
          className="signup-input"
        ></input>
        <input
          type="text"
          placeholder="password"
          id="password-input"
          className="signup-input"
        ></input>
        <input
          type="text"
          placeholder="confirm password"
          id="confirmpassword-input"
          className="signup-input"
        ></input>

        <button className="signup-btn">Sign Up</button>
      </form>
    </div>
  )
}

export default Register
