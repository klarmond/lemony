import {useRef, useState, useEffect} from 'react'
import logo from "../img/logo.jpg"
import burger from "../img/burger.png"
import r_icon from "../img/right_icon.png"
import "../styles/App.css"
import { Link } from 'react-router-dom'


const Nav = () => {
    const navRef = useRef(null);
    const [navLength, setNavLength] = useState(0);

    

  return (
    <nav className='nav' ref={navRef}>
        <ul>
          {/* <img src={burger} alt="" /> */}
          <div className='link-container'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bookings">Book</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
          </div>
          <li><a href=""><img src={logo} width="200" alt="logo" /></a></li>
          <li><img src={r_icon} className='right-icon' alt="right icon" /></li>
        </ul>
    </nav>
  )
}

export default Nav