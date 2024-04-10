export type ProductType = {
  id: number
  title: string
  description: string
  price: number
}
export type FeedbacksType = {
  id: number
  userId: string
  productId: number
  text: string
  pseudo: string
}
