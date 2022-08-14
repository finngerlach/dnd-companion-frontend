import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import IndividualApi from "../api/IndividualApi"
import Individual from "../types/Individual"

export default function IndividualCreate() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await IndividualApi.create({
      name,
      description
    } as Individual)
    navigate("/individuals")
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Name
        <input
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label htmlFor='name'>
        Description
        <input
          type='text'
          id='description'
          name='description'
          value={description}
          onChange={handleDescriptionChange}
        />
      </label>

      <button type='submit'>Submit</button>
    </form>
  )
}
