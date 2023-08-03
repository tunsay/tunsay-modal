import React, { useState } from 'react'
import { ModalComponent } from 'tunsay-modal'
import 'tunsay-modal/dist/index.css'

/**
 * Main application component.
 *
 * @returns {JSX.Element} The JSX element representing the main application.
 */
const App = () => {
  // State to manage the open/close state of the modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  /**
   * Function to open the modal.
   */
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  /**
   * Function to close the modal.
   */
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <h1>My React App</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content='This is the modal content.'
      />
    </div>
  )
}

export default App
