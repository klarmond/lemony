import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import "../styles/App.css"
import lemon from "../img/smile_lemon.png"
import { useNavigate } from 'react-router-dom'


const ConfirmedBooking = () => {
  const navigate = useNavigate();

  const handleClick= () => {
    navigate("/");
  }

  return (
    <>
    <Nav/>
    <div className='confirm-container'>
       <div className="sub-booking">
          <h1 className='confirm-heading'>Booking has been confirmed!</h1>
          <img className='smile-lemon' src={lemon} alt="smile_lemon" width={300}/>
       </div>
       <button onClick={handleClick} aria-label="Return home">Return Home</button>

    </div>
    <Footer/>
    </>
  )
}

export default ConfirmedBooking