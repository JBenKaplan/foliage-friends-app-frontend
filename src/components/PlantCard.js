import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Client from '../services/api'

const PlantCard = (props) => {
  const [currentRoomName, setRoomName] = useState()
  const [currentPlantName, setPlantName] = useState()
  const [currentImage, setImage] = useState()

  let id = useParams()

  useEffect(() => {
    const getData = async () => {
      if (id == !undefined) {
        let response = await Client.get(`/plantid/:plant_id/GetPlantId/${id}`)
        console.log(response.data.plant)
        setRoomName(response.data.roomId)
        setPlantName(response.data.name)
        setImage(response.data.image)
      }
    }
    getData()
  }, [])

  return (
    <div className="plantcard-container">
      <h1 className="room-title">{currentRoomName}</h1>
      <h4 className="plantname-text">{currentPlantName}</h4>
      <img className="plantcard-image" src={currentImage} />
    </div>
  )
}

export default PlantCard
