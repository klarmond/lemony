import React from 'react'

const Specials = ({special}) => {
  return (
    <div className='specials'>
        <div>
        <h3>{special.name}</h3>
        <p>{special.desc}</p>
        <span>${special.price}</span>
        </div>
        <div className='specials-img'>
            <img src={special.img} alt="menu item"  />
        </div>
    </div>
  )
}

export default Specials