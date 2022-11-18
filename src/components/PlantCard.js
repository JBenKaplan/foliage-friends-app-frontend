import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Client from '../services/api'
import DeletePlant from './DeletePlant'
// import plantcardImg from './sampleplant.png'

const PlantCard = () => {
  const [currentPlantInfo, setPlantInfo] = useState({})
  const [currentRoomInfo, setRoomInfo] = useState({})
  const [show, setShow] = useState(false)

  let navigate = useNavigate()

  let { id } = useParams()

  const updateHandleClick = () => {
    navigate(`/updateplant/${id}`)
  }

  useEffect(() => {
    const getData = async () => {
      if (id !== undefined) {
        let response = await Client.get(`/plants/plant/${id}`)
        setPlantInfo(response.data)
      }
    }
    getData()
  }, [])

  return (
    <div className="plantcard-container">
      <h2 className="plantname-text">{currentPlantInfo.name}</h2>
      <div className="plantcard-image-container">
        <img className="plantcard-image" src={currentPlantInfo.image} />
      </div>
      <h3 className="details">{currentPlantInfo.details}</h3>
      <div className="plantButtons">
        <button className="backBtn" onClick={() => navigate(-1)}>
          Back
        </button>
        <button
          className="updatePlantBtn"
          onClick={() => updateHandleClick(currentPlantInfo.id)}
        >
          Update
        </button>
        <button className="removePlantBtn" onClick={() => setShow(true)}>
          Delete
        </button>
        <DeletePlant
          onClose={() => setShow(false)}
          show={show}
          plant={currentPlantInfo}
        />
      </div>
    </div>
  )
}

export default PlantCard
