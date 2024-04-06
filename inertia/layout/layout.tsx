import Header from './header'
import Footer from './footer'
import React, { useState } from 'react'
import Modal from '~/components/modal'
import styles from '../css/layout.module.css'
import { UserType } from '#type/user'
import { usePage } from '@inertiajs/react'
export const ThemeContexte = React.createContext<null | UserType>(null)
const Layout = ({ children }: { children: JSX.Element }) => {
  const user = usePage().props.user as unknown as UserType
  const [openModal, setOpenModal] = useState<JSX.Element | null>(null)
  return (
    <ThemeContexte.Provider value={user}>
      {openModal && (
        <div className={styles.overlay} onClick={() => setOpenModal(null)}>
          <Modal setoOpenModal={setOpenModal}>{openModal}</Modal>
        </div>
      )}
      <Header setOpenModal={setOpenModal} />
      {children}
      <Footer />
    </ThemeContexte.Provider>
  )
}

export default Layout
