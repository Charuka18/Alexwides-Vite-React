import './App.css'
import Home from "./component/Home"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/Navbar'
import Alex from "./component/Alex"
import Panoramic from './component/panoramic';
import Contact from './component/contact';

function App() {

  return (
    
    <div >
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/alex" element={<Alex/>}/>
          <Route exact path="/panoramic" element={<Panoramic/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
    </div>
    
  )
}

export default App

