import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Individual from "../types/Individual"
import IndividualApi from "../api/IndividualApi"

export default function IndividualEntry() {
  const { id } = useParams()

  const [individual, setIndividual] = useState<Individual>()

  useEffect(() => {
    if (id) {
      IndividualApi.single(id).then((response) => {
        setIndividual(response.data)
      })
    }
  })

  return (
    <div>
      <h1>{individual?.name}</h1>
      <p>{individual?.description}</p>
    </div>
  )
}
