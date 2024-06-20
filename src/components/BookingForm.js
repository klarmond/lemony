import React, { useState, useEffect } from 'react';
import BookingSlot from './BookingSlot';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ availableTimes = {}, updateTimes = () => {}, initializeTimes = () => {}, currDate = "", dispatch = () => {}, submitForm = () => {} }) => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState(currDate);
  const [guests, setGuests] = useState(0);
  const [occasion, setOccasion] = useState("Birthday");
  const [formData, setFormData] = useState({
    tim: "",
    dat: "",
    gue: 0,
    occ: ""
  });
  const [error, setError] = useState("");
  const [errorStyle, setErrorStyle] = useState({})
  // const [shouldSubmit, setShouldSubmit] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("formData"));
  })

  useEffect(() => {
    if (!availableTimes[currDate]) {
      initializeTimes(currDate);
    } else {
      setTime(availableTimes[currDate][0] || '');
    }
    setDate(currDate);
  }, [currDate, availableTimes, initializeTimes]);

  useEffect(() => {
    if (!availableTimes[date]) {
      initializeTimes(date);
    } else {
      setTime(availableTimes[date][0] || '');
    }
  }, [date, availableTimes, initializeTimes]);

  const handleSetTime = (e) => {
    setTime(e.target.value);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: "date", payload: newDate });
    initializeTimes(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Form validation
    if (guests <= 0) {
      setErrorStyle({ outline: '1px solid #c23e34' });
      return;
    } else {
      setErrorStyle({});
    }

    updateTimes(time, date);
    // setShouldSubmit(true);

    //using an object to hold form data to be passed to submitform
    const updatedFormData = {
      tim: time,
      dat: date,
      gue: guests,
      occ: occasion,
    };

    setFormData(updatedFormData);
    // console.log(updatedFormData);
    submitForm(updatedFormData);

    let existingRecords = localStorage.getItem("formData");
    existingRecords = existingRecords ? JSON.parse(existingRecords) : [];
    if (!existingRecords || !Array.isArray(existingRecords)) {
      existingRecords = [];
    }
    
    // existingRecords = JSON.parse(localStorage.getItem('formData')) || [];

    existingRecords.push(updatedFormData);

    localStorage.setItem("formData", JSON.stringify(existingRecords));
    console.log(localStorage.getItem("formData"))
    
    setTimeout(() => {
      navigate("/confirm");
    }, 500)
    
    console.log(time, date, guests, occasion)
    
    
  };
  

  return (
    <div className='form-container'>
      <h1>Make your reservation today</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" value={date} id='res-date' onChange={handleDateChange} />
        
        <label htmlFor="res-time">Choose Time</label>
        <select id="res-time" value={time} onChange={handleSetTime}>
          {availableTimes[date] && availableTimes[date].map((atime) => (
            <option key={atime} value={atime}>{atime}</option>
          ))}
        </select>
        
        <label htmlFor="guests">Number of guests</label>
        <input style={errorStyle} type="number" placeholder='1' min="1" max="10" id='guests' required value={guests} onChange={(e) => setGuests(e.target.value)} />
        
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        
        <button type='submit' aria-label="Confirm your reservation">Confirm your reservation</button>
      </form>
      <div className="slots-container">
        <h2>Slots</h2>
        <ul>
          {availableTimes[date] && availableTimes[date].map((availbaleSlot) =>
            <BookingSlot key={availbaleSlot} slot={availbaleSlot}/>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BookingForm;