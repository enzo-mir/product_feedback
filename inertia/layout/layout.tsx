import Header from './header'
import Footer from './footer'
import React, { useEffect, useState } from 'react'
import Modal from '~/components/modal'
import styles from '../css/layout.module.css'
import { UserType } from '#type/user'
import { usePage } from '@inertiajs/react'
import { FeedbacksType } from '#type/products'
import { FeedbackComments } from '#type/feedback_comment'
export const ThemeContexte = React.createContext<{
  user?: UserType
  setOpenModal(v: JSX.Element | null): void
  feedbacks: Array<FeedbacksType>
  feedbackComments: Array<FeedbackComments>
}>({
  user: undefined,
  setOpenModal: function (value: JSX.Element | null): void {},
  feedbacks: [],
  feedbackComments: [],
})
const Layout = ({ children }: { children: JSX.Element }) => {
  const user = usePage().props.user as unknown as UserType
  const feedbackComments = usePage().props.feedback_comments as unknown as Array<FeedbackComments>
  const feedbacks = usePage().props.feedbacks as unknown as Array<FeedbacksType>

  const [openModal, setOpenModal] = useState<JSX.Element | null>(null)
  const [comments, setComments] = useState<Array<FeedbackComments>>([])

  useEffect(() => {
    setComments(feedbackComments)
  }, [usePage().props])

  return (
    <ThemeContexte.Provider value={{ user, setOpenModal, feedbackComments: comments, feedbacks }}>
      {openModal && (
        <div className={styles.overlay} onClick={() => setOpenModal(null)}>
          <Modal setoOpenModal={setOpenModal}>{openModal}</Modal>
        </div>
      )}
      <Header />
      {children}
      <Footer />
    </ThemeContexte.Provider>
  )
}

export default Layout
