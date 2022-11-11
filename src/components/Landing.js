import { useNavigate } from 'react-router-dom'
// import landingimage from './landingimage.jpg'

const Landing = () => {
  const navigate = useNavigate()

  const clickEnter = (e) => {
    navigate('/login')
  }

  return (
    <div className="landing-container">
      <header className="landing-header"></header>
      <button onClick={clickEnter} className="enter-btn">
        ENTER
      </button>
    </div>
  )
}

export default Landing
