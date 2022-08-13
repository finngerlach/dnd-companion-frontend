import { useEffect, useState } from "react"
import IndividualApi from "../api/IndividualApi"
import Individual from "../types/Individual"

export default function App() {
  const [individualList, setIndividualList] = useState<Individual[]>([])

  useEffect(() => {
    IndividualApi.index().then((response) => {
      setIndividualList(response.data)
    })
  })
  return (
    <>
      <h1>React!</h1>
      <ul>
        {individualList &&
          individualList.map((individual) => (
            <li key={individual.id}>{individual.name}</li>
          ))}
      </ul>
    </>
  )
}
