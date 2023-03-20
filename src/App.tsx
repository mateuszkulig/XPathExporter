import { useState } from 'react'
import './App.css'
import ResultBox from './components/ResultBox'
import AddXPathButton from './components/AddXPathButton'
import StopListeners from './components/StartCapture'
import { xPath } from './model'
import StartCapture from './components/StartCapture'

const App: React.FC = () => {

  const [xpaths, setXPaths] = useState<xPath[]>([]);

  return (
    <div className="App">
      <span className="heading">XPathExporter</span>
      <ResultBox xpaths={xpaths}></ResultBox>
      <AddXPathButton xpaths={xpaths} setXPaths={setXPaths}></AddXPathButton>
      <StartCapture></StartCapture>
    </div>
  )
}

export default App
