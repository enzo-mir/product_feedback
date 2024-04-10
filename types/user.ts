export type UserType = {
  id: string
  pseudo: string
  email: string
  password: string
  created_at: Date
  updated_at: Date
}

export type RegisterType = {
  pseudo: string
  email: string
  password: string
}
export type LoginType = {
  email: string
  password: string
}
