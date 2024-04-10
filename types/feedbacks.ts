export type CreateFeedbackType = {
  product_id: number
  user_id: string
  text: string
}

export type UpdateFeedbackType = Omit<CreateFeedbackType, 'product_id'>
