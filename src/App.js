import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import BookingPage from './components/BookingPage';
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [availableTimes, setAvailableTimes] = useState(["17:00","18:00","19:00","20:00","21:00","22:00"])


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bookings' element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>}/>
      </Routes>
    </>
  );
}

export default App;
