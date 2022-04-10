import { useState } from "react"
import "../styles/App.scss"
import Party, { PartyMember } from "./Party/Party"

const party: PartyMember[] = [
  {
    name: "Detlef",
    level: 1,
  },
  {
    name: "Dieter",
    level: 2,
  },
]

export default function App() {
  const [partyState, setPartyState] = useState(party)

  function handlePartyStateAdd(item: PartyMember) {
    console.log("blub in app")
    const newState = [...partyState, item]
    console.log(newState)
    setPartyState(newState)
    console.log(partyState)
  }

  function handlePartyStateItemChange(i: number, item: PartyMember) {
    const newState = [...partyState]
    newState[i] = item
    setPartyState(newState)
  }

  function handlePartyStateRemove(i: number) {
    setPartyState([...partyState].splice(i, 1))
  }

  return (
    <Party
      party={party}
      onPartyStateAdd={handlePartyStateAdd}
      onPartyStateItemChange={handlePartyStateItemChange}
      onPartyStateRemove={handlePartyStateRemove}
    ></Party>
  )
}
