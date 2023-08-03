# tunsay-modal

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/tunsay-modal.svg)](https://www.npmjs.com/package/tunsay-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tunsay-modal --legacy-peer-deps
```

## Usage

```jsx
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
```

## License

MIT © [tunsay](https://github.com/tunsay)
