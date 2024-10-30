import { useState } from "react"
import Logo from '../assets/Logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function Header(){
  const [menuActive, setMenuActive] = useState();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="header">
      <a href="Home"><img src={Logo} alt='' className='logo'/></a>
      <div className="hamburger" onClick={toggleMenu}>
      
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="&#9776;"
              menuVariant="dark"
            >
              <NavDropdown.Item href="../component/Home.jsx">Home</NavDropdown.Item>
              <NavDropdown.Item href="./component/Alex.jsx">Alex's Vision</NavDropdown.Item>
              <NavDropdown.Item href="panoramic">1'ever Panoramic Landscapes tutorial</NavDropdown.Item>
              <NavDropdown.Item>
                <NavDropdown title="Collections">
                <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another Action</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavDropdown title="Collections">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another Action</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown.Item>
              <NavDropdown.Item href="lessons">Editing Lessons</NavDropdown.Item>
              <NavDropdown.Item>
                <NavDropdown title="Collections">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another Action</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown.Item>
              <NavDropdown.Item href="contact">Contact</NavDropdown.Item>

            </NavDropdown>
          </div>
          </div>
     );
}
