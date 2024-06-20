import React from 'react'
import logo2 from "../img/logo2.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-section">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bookings">Book</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
        <p>1234 W Elm St</p>
        <p>Chicago, IL 60610</p>
        <p>(312)555-1234</p>
        </div>

        <div className="footer-section">
          <img className='footer-logo' src={logo2} width={100} alt="little lemon logo" />
          <p className='footer-copyright'>&copy; Little Lemon</p>
        </div>
    
    </footer>
  )
}

export default Footer