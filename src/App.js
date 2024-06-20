import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingPage from './components/BookingPage';
import Home from "./components/Home";
import { useReducer, useEffect } from "react";
import "./styles/App.css";
import { fetchAPI, submitAPI } from "./utils/api";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Reviews from "./components/Reviews";

// Initial state
const initialState = {
  availableTimes: [],
  timesByDate: {},
  currDate: "2024-07-24"
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "initialize": {
      const { date, times } = action.payload;
      // If the date is already initialized, do nothing
      if (state.timesByDate[date]) {
        return state;
      }
      // Initialize the times for the date
      return {
        ...state,
        timesByDate: {
          ...state.timesByDate,
          [date]: times
        }
      };
    }
    case "reserve": {
      const { date, reservedTime } = action.payload;
      return {
        ...state,
        timesByDate: {
          ...state.timesByDate,
          [date]: state.timesByDate[date].filter(time => time !== reservedTime)
        }
      };
    }
    case "date": {
      return {
        ...state,
        currDate: action.payload
      };
    }
    default:
      return state;
  }
}

const submitForm = (formData) => {
  // console.log(formData);
  if (submitAPI(formData)) {
    // Handle successful submission
  }
}

// Function to update times
export function updateTimes(dispatch) {
  return (reservedTime, date) => {
    dispatch({ type: "reserve", payload: { reservedTime, date } });
  };
}

// Function to initialize times
export function initializeTimes(dispatch) {
  return (date) => {
    const times = fetchAPI(new Date(date));
    dispatch({ type: "initialize", payload: { date, times } });
  };
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // to set off the initial setting of the dates
  useEffect(() => {
    initializeTimes(dispatch)("2024-07-24");
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bookings' element={<BookingPage availableTimes={state.timesByDate} updateTimes={updateTimes(dispatch)} initializeTimes={initializeTimes(dispatch)} currDate={state.currDate} dispatch={dispatch} submitForm={submitForm}/>} />
      <Route path='/confirm' element={<ConfirmedBooking/>} />
      <Route path='/confirm' element={<ConfirmedBooking/>} />
      <Route path='/reviews' element={<Reviews/>} />
    </Routes>
  );
}

export default App;