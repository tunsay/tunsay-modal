import React from 'react'
import styles from './styles.module.css'

export const ModalComponent = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <div className={styles.modal_body}>{content}</div>
        <button className={styles.modal_close} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}
