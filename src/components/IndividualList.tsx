import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import IndividualApi from "../api/IndividualApi"
import Button from "../baseComponents/Button"
import Table, { LinkData } from "../baseComponents/Table"
import Individual from "../types/Individual"

export default function IndividualList() {
  const [individualList, setIndividualList] = useState<Individual[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    IndividualApi.index().then((response) => {
      setIndividualList(response.data)
    })
  }, [])

  const data: LinkData<Individual> = {
    linkBuilder: (individual: Individual) => `/individuals/${individual.id}`,
    linkPlacementKey: "name"
  }

  return (
    <>
      <h1 className='text-3xl font-bold underline'>List of individuals</h1>
      <Button onClick={() => navigate("/individuals/create")}>
        New Individual
      </Button>
      <Table<Individual>
        keyLabels={
          new Map([
            ["name", "Name"],
            ["id", "ID"]
          ])
        }
        objects={individualList}
        rowKey='id'
        linkData={data}
      />
    </>
  )
}
