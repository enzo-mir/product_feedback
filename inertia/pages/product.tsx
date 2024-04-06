import Layout from '~/layout/layout'
import { FeedbacksType, ProductType } from '#type/products'
import Feedback from '~/components/feedback'
import { Link } from '@inertiajs/react'

import styles from '../css/products.module.css'

const Product = ({
  product,
  feedbacks,
}: {
  product: ProductType
  feedbacks: Array<FeedbacksType>
}) => {
  return (
    <main className={styles.main}>
      <Link href="/">Go back</Link>
      <section>
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
        <span>{product.price}</span>
      </section>
      <section>
        {feedbacks.length ? (
          <ul>
            {feedbacks.map((feedback) => (
              <Feedback feedback={feedback} />
            ))}
          </ul>
        ) : (
          <p>No feedback</p>
        )}
      </section>
    </main>
  )
}

export default Product

Product.layout = (page: JSX.Element) => <Layout children={page} />
