import Individual from "../types/Individual"
import { get } from "./base"

export default {
  index: () => get<Individual[]>("/individuals"),
  single: (id: string) => get<Individual>(`/individuals/${id}`)
}
