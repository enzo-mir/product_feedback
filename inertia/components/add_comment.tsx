import { useForm } from '@inertiajs/react'
import { FormEvent, useContext } from 'react'
import { ThemeContexte } from '~/layout/layout'

const AddComment = ({
  product_id,
  feedback_id,
  pseudo,
}: {
  product_id: number
  feedback_id: number
  pseudo: string
}) => {
  const { data, setData, post, processing } = useForm({
    feedbackId: feedback_id,
    productId: product_id,
    pseudo,
    text: '',
  })
  const { setOpenModal } = useContext(ThemeContexte)
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    post('/comment/create', {
      data,
      onSuccess: () => {
        setOpenModal(null)
      },
    })
  }
  return (
    <>
      <h1>Add comment</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setData({ ...data, text: e.target.value })} />
        <button disabled={processing} type="submit">
          Add Comment
        </button>
      </form>
    </>
  )
}

export default AddComment
