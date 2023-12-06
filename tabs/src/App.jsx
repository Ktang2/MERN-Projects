import './App.css'
import Tabs from './components/tabs'

function App() {
  const allTabs = [
    {title: "Tab 1", content: "Display content specific to the first tab"},
    {title: "Tab 2", content: "Display content specific to the second tab"},
    {title: "Tab 3", content: "Display content specific to the third tab"}
  ]

  return (
    <>
      <Tabs allTabs={allTabs}/>
    </>
  )
}

export default App
