type PartyMemberProps = {
  name?: string
  level?: number
  ac?: number
  pp?: number
}

export default function PartyMember(props: PartyMemberProps) {
  return (
    <form className="row">
      <input type="text" placeholder="Name" className="col" />
      <input type="text" placeholder="Level" className="col" />
      <input type="text" placeholder="AC" className="col" />
      <input type="text" placeholder="PP" className="col" />
    </form>
  )
}
