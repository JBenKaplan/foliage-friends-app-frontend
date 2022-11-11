import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="apptitle-container">
      <Link to="/" className="header">
        <h1 className="header-text">Foliage Friends</h1>
      </Link>
    </div>
  )
}

export default Header
