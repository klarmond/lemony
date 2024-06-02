import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import BookingForm from './BookingForm'

const BookingPage = ({availableTimes, setAvailableTimes}) => {
  return (
    <>
      <Nav/>
      <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
      <Footer/>
    </>
  )
}

export default BookingPage