import {useRef, useState, useEffect} from 'react'
import logo from "../img/logo.jpg"
import burger from "../img/burger.png"
import r_icon from "../img/right_icon.png"
import "../styles/App.css"
import { Link } from 'react-router-dom'


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
      setIsOpen(!isOpen);
    }
    

  return (
    <nav className='nav'>
        {/* <img onClick={toggleOpen} src={burger} className='nav-burger' alt="" /> */}
          <div className="nav-dropdown">
            <img onClick={toggleOpen} src={burger} className='nav-burger' alt="" />
            <div className={`link-container ${isOpen? "open": "hide"}`}>
              <ul className="links" >
                <li className='page-link'><Link to="/">Home</Link></li>
                <li className='page-link'><Link to="/bookings">Book</Link></li>
                <li className='page-link'><Link to="/reviews">Reviews</Link></li>
              </ul>
            </div>
          </div>
          <li><Link to="/"><img src={logo} width="200" alt="logo" /></Link></li>
          <li><img src={r_icon} className='right-icon' alt="right icon" /></li>     
    </nav>
  )
}

export default Nav