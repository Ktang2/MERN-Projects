import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Form from './components/Form'

function App() {
  const [colors, setColors] = useState([]);

  const addColor = (colorInput) => {
    setColors([...colors, colorInput]);
  }

  return (
    <>
      <Form onNewColor={addColor}/>
      <Display allColors={colors}/>
    </>
  )
}

export default App
