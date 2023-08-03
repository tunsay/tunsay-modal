import React from 'react'
import styles from './styles.module.css'

/**
 * Modal component for displaying a modal dialog with provided content.
 *
 * @param {boolean} isOpen - Flag to determine if the modal is open or closed.
 * @param {Function} onClose - Function to handle modal close event.
 * @param {JSX.Element} content - The JSX element to be displayed as the content inside the modal.
 *
 * @returns {JSX.Element | null} The JSX element representing the modal component or null if not open.
 */
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
