import Register from '~/components/register'
import styles from '../css/header.module.css'
import Login from '~/components/login'
import { ThemeContexte } from '~/layout/layout'
import { useContext } from 'react'
import { Link } from '@inertiajs/react'
const Header = () => {
  const { user, setOpenModal } = useContext(ThemeContexte)

  return (
    <header className={styles.header}>
      <ul>
        {user ? (
          <>
            <li>
              <Link href="/auth/logout">Logout</Link>
            </li>
            <li>
              <button>Profile</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <button onClick={() => setOpenModal(<Register />)}>Register</button>
            </li>
            <li>
              <button onClick={() => setOpenModal(<Login />)}>Login</button>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
