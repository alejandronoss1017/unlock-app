export interface Company {
  company_id: number
  created_at: string
  name: string
}
export interface Event {
  company_id: number
  created_at: string
  description: string | null
  event_id: number
  finish_date: string
  name: string
  start_date: string
}

export interface Lodging {
  address: string
  city: string
  created_at: string
  event_id: number | null
  lodging_id: number
  name: string | null
}
