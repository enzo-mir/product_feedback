import { ProductType } from '#type/products'
import { Head, Link } from '@inertiajs/react'
import Layout, { ThemeContexte } from '~/layout/layout'
import styles from '../css/home.module.css'
import { useContext } from 'react'
export default function Home({ products }: { products: Array<ProductType> }) {
  const user = useContext(ThemeContexte)
  console.log(user)

  return (
    <main className={styles.main}>
      <Head title="Homepage" />
      <ul className={styles.products}>
        {products.map((product) => {
          return (
            <Link href={product.id.toString()} key={product.id}>
              <li>
                <p>{product.title.toUpperCase()}</p>
                <p>{product.description}</p>
                <span>{product.price} €</span>
              </li>
            </Link>
          )
        })}
      </ul>
    </main>
  )
}

Home.layout = (page: JSX.Element) => <Layout children={page} />
