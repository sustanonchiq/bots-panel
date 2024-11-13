import { useState } from 'react'
import AuthPage from '../../pages/AuthPage/AuthPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthPage/>
    </>
  )
}

export default App
