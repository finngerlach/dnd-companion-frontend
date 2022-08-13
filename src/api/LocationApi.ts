import { get } from "./base"

export default {
  index: () => get<Location[]>("/locations"),
  single: (id: string) => get<Location>(`/locations/${id}`)
}
