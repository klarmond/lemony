import React from 'react'
import logo from "../img/logo.jpg"


const Nav = () => {
  return (
    <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href=""><img src={logo} width="200" alt="logo" /></a></li>
        </ul>
    </nav>
  )
}

export default Nav