import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const PlantCard = (props) => {
  const navigate = useNavigate()
  let id = useParams()

  const plantCardHandleClick = () => {
    navigate(`/plantcard/${props.id}`)
  }
  return (
    <div className="plantcard-container">
      <h1 className="plantname-text">{plantName}</h1>
      <img src="" className="plantcard-image" />
    </div>
  )
}
