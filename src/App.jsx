import Welcome from './components/Welcome.jsx'
import './App.css'
import { Route,Routes} from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'

function App() {
  return (
    
      <Routes>
      
       <Route path="/" element={<div className="app">
      <Welcome />
    </div>} />
     <Route path="*" element={<ErrorPage/>} />
     </Routes>
    
    
  )
}

export default App
