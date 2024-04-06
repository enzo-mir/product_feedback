import { FeedbacksType } from '#type/products'

const Feedback = ({ feedback }: { feedback: FeedbacksType }) => {
  return (
    <li key={feedback.id}>
      <p>{feedback.text}</p>
    </li>
  )
}

export default Feedback
