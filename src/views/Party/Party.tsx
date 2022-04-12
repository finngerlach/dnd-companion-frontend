import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { ChangeEvent, useState } from "react"
import { Button, Col, Container, Form } from "react-bootstrap"
import { v4 as uuidv4 } from "uuid"

const party: PartyMember[] = [
  {
    id: uuidv4(),
    name: "Detlef",
    level: 1,
  },
  {
    id: uuidv4(),
    name: "Dieter",
    level: 2,
  },
]

export type PartyMember = {
  id: string
  name?: string
  level?: number
  ac?: number
  pp?: number
}

export default function Party() {
  const [partyState, setPartyState] = useState(party)

  function handlePartyAdd() {
    setPartyState(partyState.concat({ id: uuidv4() }))
  }

  function handlePartyClear() {
    setPartyState([])
  }

  function handlePartyRemove(id: string) {
    return () => {
      setPartyState(partyState.filter((item) => item.id !== id))
    }
  }

  function handlePartyItemChange(id: string) {
    return (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement
      const newState = partyState.map((item) => {
        if (item.id !== id) return item
        else return { ...item, [target.name]: target.value }
      })
      setPartyState(newState)
    }
  }

  const partyMemberRows = partyState.map((member: PartyMember) => (
    <Form className="row gx-2 mb-2" key={member.id}>
      <Col>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={member.name || ""}
          onChange={handlePartyItemChange(member.id)}
        />
      </Col>
      <Col>
        <Form.Control
          type="number"
          placeholder="Level"
          name="level"
          value={member.level || ""}
          onChange={handlePartyItemChange(member.id)}
        />
      </Col>
      <Col>
        <Form.Control
          type="number"
          placeholder="AC"
          name="ac"
          value={member.ac || ""}
          onChange={handlePartyItemChange(member.id)}
        />
      </Col>
      <Col>
        <Form.Control
          type="number"
          placeholder="PP"
          name="pp"
          value={member.pp || ""}
          onChange={handlePartyItemChange(member.id)}
        />
      </Col>
      <Button
        className="col-auto"
        onClick={handlePartyRemove(member.id)}
        title="Remove"
        variant="outline-danger"
      >
        <FontAwesomeIcon icon={solid("xmark")}></FontAwesomeIcon>
      </Button>
    </Form>
  ))
  return (
    <>
      <Container className="mt-2">
        {partyMemberRows}
        <Button onClick={handlePartyAdd} className="mt-2">
          <FontAwesomeIcon
            icon={solid("user-plus")}
            className="me-2"
          ></FontAwesomeIcon>
          Add new party member
        </Button>
      </Container>
    </>
  )
}
