import './App.css'
import Home from "./component/Home"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/Navbar'

function App() {

  return (
    
    <div >
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
    </div>
    
  )
}

export default App

