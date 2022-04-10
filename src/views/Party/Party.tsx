import { useCallback } from "react"
import { Button } from "react-bootstrap"

export type PartyMember = {
  name?: string
  level?: number
  ac?: number
  pp?: number
}

type PartyProps = {
  party: PartyMember[]
  onPartyStateAdd: (item: PartyMember) => void
  onPartyStateItemChange: (i: number, item: PartyMember) => void
  onPartyStateRemove: (i: number) => void
}

export default function Party({
  party,
  onPartyStateAdd,
  onPartyStateItemChange,
  onPartyStateRemove,
}: PartyProps) {
  const handlePartyStateAdd = () => {
    console.log("blub")
    onPartyStateAdd({})
  }

  const partyMemberRows = party.map((member: PartyMember, index: number) => (
    <form className="row" key={index}>
      <input
        type="text"
        placeholder="Name"
        className="col"
        value={member.name}
      />
      <input
        type="text"
        placeholder="Level"
        className="col"
        value={member.level}
      />
      <input type="text" placeholder="AC" className="col" value={member.ac} />
      <input type="text" placeholder="PP" className="col" value={member.pp} />
      <Button className="col">Remove</Button>
    </form>
  ))
  return (
    <>
      {partyMemberRows}
      <Button onClick={handlePartyStateAdd}>Add</Button>
    </>
  )
}
