import Location from "../types/Location"
import { get } from "./base"

export interface LocationParams {
  individualId?: string
}

export default {
  index: (params: LocationParams) => get<Location[]>("/locations", { params }),
  single: (id: string) => get<Location>(`/locations/${id}`)
}
