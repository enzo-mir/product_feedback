export type FeedbackComments = {
  id: number
  feedbackId: number
  productId: number
  pseudo: string
  text: string
}

export type CreateFeedbackComment = Omit<FeedbackComments, 'id'>
