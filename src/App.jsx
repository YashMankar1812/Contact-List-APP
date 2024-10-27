import { useState } from 'react'
import './App.css'
import ContactListApp from "./components/ContactListApp";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ContactListApp/>
    </>
  )
}

export default App
