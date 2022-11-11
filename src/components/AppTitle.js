import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to="/" className="header">
        <h1>Foliage Friends</h1>
      </Link>
    </div>
  )
}

export default Header
