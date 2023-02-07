import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ResultBox from './components/ResultBox'
import AddXPathButton from './components/AddXPathButton'
import { xPath } from './model'

const App: React.FC = () => {

  const [xpaths, setXPaths] = useState<xPath[]>([]);

  return (
    <div className="App">
      <span className="heading">XPathExporter</span>
      <ResultBox xpaths={xpaths}></ResultBox>
      <AddXPathButton xpaths={xpaths} setXPaths={setXPaths}></AddXPathButton>
    </div>
  )
}

export default App
