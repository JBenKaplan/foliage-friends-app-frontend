const LogIn = () => {
  return (
    <div>
      <h1>Foliage Friends</h1>
      <button>Sign Up</button>
      <h3>Sign In</h3>
      <form>
        <input type="text" className="email-input" placeholder="email"></input>
        <input
          type="text"
          className="password-input"
          placeholder="password"
        ></input>
      </form>
    </div>
  )
}

export default LogIn
