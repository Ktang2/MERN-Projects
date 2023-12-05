import './App.css'
import Tabs from './components/tabs'

function App() {
  const allTabs = [
    {title: "Tab 1", content: "Content 1"},
    {title: "Tab 2", content: "Content 2"},
    {title: "Tab 3", content: "Content 3"}
  ]

  return (
    <>
      <Tabs allTabs={allTabs}/>
    </>
  )
}

export default App
