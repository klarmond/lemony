import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import BookingForm from './BookingForm'

const BookingPage = ({availableTimes, initializeTimes = () => {},  updateTimes, currDate, dispatch, submitForm}) => {
  return (
    <>
      <Nav/>
      <BookingForm availableTimes={availableTimes} initializeTimes={initializeTimes} updateTimes={updateTimes} currDate={currDate} dispatch={dispatch} submitForm={submitForm}/>
      <Footer/>
    </>
  )
}

export default BookingPage