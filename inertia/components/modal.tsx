import { ElementRef, useRef } from 'react'
import styles from '../css/modal.module.css'
const Modal = ({
  children,
  setoOpenModal,
}: {
  children: JSX.Element
  setoOpenModal(v: JSX.Element | null): void
}) => {
  const dialogRef = useRef<ElementRef<'dialog'>>(null)
  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      open={children !== null}
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={() => setoOpenModal(null)}>Close</button>
      {children}
    </dialog>
  )
}

export default Modal
