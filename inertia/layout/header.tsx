import Register from '~/components/register'
import styles from '../css/header.module.css'
import Login from '~/components/login'
const Header = ({ setOpenModal }: { setOpenModal(v: JSX.Element): void }) => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <button onClick={() => setOpenModal(<Register />)}>Register</button>
        </li>
        <li>
          <button onClick={() => setOpenModal(<Login />)}>Login</button>
        </li>
      </ul>
    </header>
  )
}

export default Header
