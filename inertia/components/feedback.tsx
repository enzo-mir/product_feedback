import { FeedbacksType } from '#type/products'
import { Link } from '@inertiajs/react'
import { useContext } from 'react'
import { ThemeContexte } from '~/layout/layout'
import EditFeedback from './edit_feedback'
import AddComment from './add_comment'

const Feedback = ({ feedback }: { feedback: FeedbacksType }) => {
  const { user, setOpenModal, feedbackComments } = useContext(ThemeContexte)
  const filterAnswere = feedbackComments?.filter((answere) => answere.feedbackId === feedback.id)
  return (
    <>
      <li key={feedback.id}>
        <span>{feedback.pseudo}</span>
        <p>{feedback.text}</p>
        {user ? (
          user.id === feedback.userId ? (
            <>
              <button>
                <Link href={`/feedback/${feedback.id}/delete`}>Delete</Link>
              </button>
              <button onClick={() => setOpenModal(<EditFeedback text={feedback.text} />)}>
                Edit
              </button>
            </>
          ) : (
            <button
              onClick={() =>
                setOpenModal(
                  <AddComment
                    product_id={feedback.productId}
                    feedback_id={feedback.id}
                    pseudo={user.pseudo}
                  />
                )
              }
            >
              Comment
            </button>
          )
        ) : null}
      </li>
      {filterAnswere?.length
        ? filterAnswere.map((answere) => {
            return (
              <ul>
                <li key={answere.id}>
                  {answere.text}

                  {answere.pseudo === user?.pseudo ? (
                    <Link href={`/comment/${answere.id}/delete`}>
                      <button>X</button>
                    </Link>
                  ) : null}
                </li>
              </ul>
            )
          })
        : null}
    </>
  )
}

export default Feedback
