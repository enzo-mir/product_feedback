import { FeedbacksType } from '#type/products'
import { Link } from '@inertiajs/react'
import { useContext } from 'react'
import { ThemeContexte } from '~/layout/layout'
import EditFeedback from './edit_feedback'

const Feedback = ({ feedback }: { feedback: FeedbacksType }) => {
  const { user, setOpenModal } = useContext(ThemeContexte)
  return (
    <li key={feedback.id}>
      <p>{feedback.text}</p>
      <span>{feedback.pseudo}</span>
      {user && user.id === feedback.user_id ? (
        <>
          <button>
            <Link href={`/feedback/${feedback.id}/delete`}>Delete</Link>
          </button>
          <button onClick={() => setOpenModal(<EditFeedback text={feedback.text} />)}>Edit</button>
        </>
      ) : null}
    </li>
  )
}

export default Feedback
