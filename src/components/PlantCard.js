import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Client from '../services/api'
import plantcardImg from './sampleplant.png'

const PlantCard = (props) => {
  console.log('my plant card is working')
  const [currentRoomInfo, setRoomInfo] = useState()
  const [currentPlantInfo, setPlantInfo] = useState({
    name: 'Umbrella Tree',
    image: ''
  })

  let { id } = useParams()

  useEffect(() => {
    console.log('use effect is working')
    const getData = async () => {
      if (id !== undefined) {
        console.log('id is found')
        let response = await Client.get(`/plants/plant/${id}`)
        console.log(response.data)
        // setRoomName(response.data.roomId)
        setPlantInfo(response.data)
      }
    }
    getData()
  }, [])

  return (
    <div className="plantcard-container">
      {/* <h1 className="room-title">{currentRoomInfo.name}</h1> */}
      <h4 className="plantname-text">{currentPlantInfo.name}</h4>
      <img className="plantcard-image" src={currentPlantInfo.image} />
    </div>
  )
}

export default PlantCard
