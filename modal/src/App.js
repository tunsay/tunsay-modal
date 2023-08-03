import React, { useState } from 'react'
import { ModalComponent } from 'tunsay-modal'
import 'tunsay-modal/dist/index.css'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

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
