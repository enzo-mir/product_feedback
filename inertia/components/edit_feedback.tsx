import { useForm } from '@inertiajs/react'
import { FormEvent } from 'react'

const EditFeedback = ({ text }: { text: string }) => {
  const { data, setData, post } = useForm({
    text,
  })
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    post('/feedback/update', { data })
  }
  return (
    <>
      <h1>edit_feedback</h1>

      <form onSubmit={handleSubmit}>
        <textarea value={data.text} onChange={(e) => setData({ text: e.target.value })}></textarea>
        <button type="submit">Edit</button>
      </form>
    </>
  )
}

export default EditFeedback
