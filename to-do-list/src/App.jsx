import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Form from './components/Form'

function App() {
  const [doList, setDoList] = useState([]);

  return (
    <>
      <Form setDoList={setDoList} doList={doList}/>
      <Display doList={doList}/>
    </>
  )
}

export default App
