import Header from './header'
import Footer from './footer'
import { useState } from 'react'
import Modal from '~/components/modal'
import styles from '../css/layout.module.css'

const Layout = ({ children }: { children: JSX.Element }) => {
  const [openModal, setOpenModal] = useState<JSX.Element | null>(null)
  return (
    <>
      {openModal && (
        <div className={styles.overlay} onClick={() => setOpenModal(null)}>
          <Modal setoOpenModal={setOpenModal}>{openModal}</Modal>
        </div>
      )}
      <Header setOpenModal={setOpenModal} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
