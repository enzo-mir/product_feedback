import Layout, { ThemeContexte } from '~/layout/layout'
import { FeedbacksType, ProductType } from '#type/products'
import Feedback from '~/components/feedback'
import { Link } from '@inertiajs/react'

import styles from '../css/products.module.css'
import { useContext } from 'react'
import AddFeedback from '~/components/add_feedback'

const Product = ({
  product,
  feedbacks,
}: {
  product: ProductType
  feedbacks: Array<FeedbacksType>
}) => {
  const { user, setOpenModal } = useContext(ThemeContexte)
  return (
    <main className={styles.main}>
      <Link href="/">Go back</Link>
      <section className={styles.header_section}>
        <h1>{product.title.toUpperCase()}</h1>
        <h2>{product.description}</h2>
        <span>{product.price}</span>
      </section>
      <section>
        {feedbacks.length ? (
          <ul className={styles.feedback_list}>
            {feedbacks.map((feedback) => (
              <Feedback feedback={feedback} />
            ))}
          </ul>
        ) : (
          <p>No feedback</p>
        )}
        {user ? (
          <button onClick={() => setOpenModal(<AddFeedback product={product} />)}>
            Add feedback
          </button>
        ) : null}
      </section>
    </main>
  )
}

export default Product

Product.layout = (page: JSX.Element) => <Layout children={page} />
