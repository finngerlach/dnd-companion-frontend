export default interface Location {
  id: string
  name: string
  description: string
  parentLocationIds: string[]
  childLocationIds: string[]
  individualIds: string[]
}
