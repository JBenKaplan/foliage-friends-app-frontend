import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()

  const clickEnter = (e) => {
    navigate('/login')
  }

  return (
    <div>
      <h1>Foliage Friends</h1>
      <button onClick={clickEnter} className="enter-btn">
        ENTER
      </button>
    </div>
  )
}

export default Landing
