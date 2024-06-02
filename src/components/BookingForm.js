import React from 'react'
import { useState } from 'react'

const BookingForm = ({availableTimes, setAvailableTimes}) => {
    const [time, setTime] = useState();
    const [date, setDate] = useState();
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState();
    
  return (
    <div className='form-container'>
        <form className="booking-form" >
            <label htmlFor="">Choose date</label>
            <input type="date" value={date} id='res-date'onChange={(e) => setDate(e.target.value)}/>
            <label htmlFor="res-time">Choose Time</label>
            <select name="" id="res-time" value={time}
                onChange={(e) => setTime(e.target.value)}
            >
              {availableTimes.map((atime) => (
                <option key={atime} value={atime}>{atime}</option>
              ))

              }
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder='1' min="1" max="10" id='guests' value={guests} onChange={(e) => setGuests(e.target.value)}/>
            <label htmlFor="occasion">Occasion</label>
            <select name="" id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <button type='submit'>Make your reservation</button>
        </form>


        {/* <h1>DACHOSEIS {date}</h1> */}
    </div>
  )
}

export default BookingForm