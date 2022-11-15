import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const PlantCard = (props) => {
  const navigate = useNavigate()
  let id = useParams()

  const plantCardHandleClick = () => {
    navigate(`/plantcard/${props.plant.image}`)
  }
  return (
    <div className="plantcard-container">
      <h1 className="plantname-text">Plant Card</h1>
      <img className="plantcard-image" src="" />
    </div>
  )
}

export default PlantCard
