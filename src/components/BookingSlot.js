import "../styles/App.css"

const BookingSlot = ({slot}) => {
  return (
    <li className="time-item">
      {slot}
    </li>
  )
}

export default BookingSlot