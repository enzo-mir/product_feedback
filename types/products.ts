export type ProductType = {
  id: number
  title: string
  description: string
  price: number
}
export type FeedbacksType = {
  id: number
  user_id: string
  product_id: number
  text: string
  pseudo: string
}
