import Individual from "../types/Individual"
import { get, post } from "./base"

export default {
  index: () => get<Individual[]>("/individuals"),
  single: (id: string) => get<Individual>(`/individuals/${id}`),
  create: (data: Individual) => post<Individual>(`/individuals`, data)
}
