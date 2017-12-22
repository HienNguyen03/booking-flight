import {
  SEARCH_FLIGHTS,
  FETCH_FLIGHTS_START,
  FETCH_FLIGHTS_SUCCESS,
  FETCH_FLIGHTS_FAILURE,
  SET_BOOKING_FLIGHT,
  SET_PASSENGER_DETAILS,
  SET_PREFERENCES,
  SET_STEP_SUCCESS,
  CANCEL_BOOKING,
  STEP_BACK
} from './actionTypes';

import {fetchFlightsApi} from '../api';

export const fetchFlights = (flightFrom, flightTo, FlightDate) => async dispatch => {
  dispatch({type: FETCH_FLIGHTS_START})

  try {
    const flights = await fetchFlightsApi(flightFrom, flightTo, FlightDate);
    dispatch({
      type: FETCH_FLIGHTS_SUCCESS,
      payload: flights
    })
  } catch (err) {
    dispatch({
      type: FETCH_FLIGHTS_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const searchFlights = seachData => dispatch => {
  dispatch({
    type: SEARCH_FLIGHTS,
    payload: seachData
  });
}

export const setBookingFlight = (flight) => dispatch => {
  dispatch({
    type: SET_BOOKING_FLIGHT,
    payload: flight
  });
}

export const setPassengerDetails = (data) => dispatch => {
  dispatch({
    type: SET_PASSENGER_DETAILS,
    payload: data
  });
}

export const setPreferences = (data) => dispatch => {
  dispatch({
    type: SET_PREFERENCES,
    payload: data
  });
}

export const setStepSuccess = () => dispatch => {
  dispatch({
    type: SET_STEP_SUCCESS
  });
}

export const cancelBooking = () => dispatch => {
  dispatch({
    type: CANCEL_BOOKING
  });
}

export const stepBack = () => dispatch => {
  dispatch({
    type: STEP_BACK
  });
}
