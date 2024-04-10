import { ProductType } from '#type/products'
import { useForm } from '@inertiajs/react'
import { FormEvent, useContext } from 'react'
import { ThemeContexte } from '~/layout/layout'

const AddFeedback = ({ product }: { product: ProductType }) => {
  const { user } = useContext(ThemeContexte)
  const { data, setData, post, processing } = useForm({
    product_id: product.id,
    user_id: user!.id,
    text: '',
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    post('/feedback/create', { data })
  }
  return (
    <>
      <h1>Add feedback</h1>
      <span>{product.title}</span>
      <form onSubmit={handleSubmit}>
        <textarea
          cols={30}
          rows={10}
          placeholder="Type your feedback"
          name="text"
          onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
        ></textarea>
        <button disabled={processing} type="submit">
          Add
        </button>
      </form>
    </>
  )
}

export default AddFeedback
