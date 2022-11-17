import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        {/* <h3>Welcome {user.email.split('@')[0]}!</h3> */}
        <div className="welcome-container">
          <h3 className="welcome-note">Welcome {user.name}!</h3>
        </div>

        <Link to="/plantgallery">Plants</Link>
        <Link to="/accountdetails">Account</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Sign In</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/"></Link>
      {user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav
