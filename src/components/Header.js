import React from 'react'
import tater from "../img/tater.jpg"

const Header = () => {
  return (
    <header className='header'>
        <section>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <div className='header-info'>
            <p>We are a family owned Mediterranean restaurant focused on traditional recipes with a modern twist. </p>
            <div className="header-info-img">
                <img src={tater} width="200" alt="header img" />
            </div>
          </div>
          <button className='reserve-btn'>Reserve a table</button>
        </section>
        
    </header>
  )
}

export default Header