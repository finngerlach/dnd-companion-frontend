import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Individual from "../types/Individual"
import Location from "../types/Location"
import IndividualApi from "../api/IndividualApi"
import LocationApi, { LocationParams } from "../api/LocationApi"

export default function IndividualEntry() {
  const { id } = useParams()

  const [individual, setIndividual] = useState<Individual>()
  const [locations, setLocations] = useState<Location[]>()

  useEffect(() => {
    if (id) {
      IndividualApi.single(id).then((response) => {
        setIndividual(response.data)
      })

      const params: LocationParams = { individualId: id }
      LocationApi.index(params).then((response) => {
        setLocations(response.data)
      })
    }
  }, [])

  return (
    <div>
      <h1>{individual?.name}</h1>
      <p>{individual?.description}</p>
      <h2 className='mt-4'>Locations</h2>
      {locations && locations.map((location) => <span>{location.name}</span>)}
    </div>
  )
}
