export type UserType = {
  id: number
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
