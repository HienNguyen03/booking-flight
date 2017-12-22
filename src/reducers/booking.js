import {
  SEARCH_FLIGHTS,
  SET_BOOKING_FLIGHT,
  SET_PASSENGER_DETAILS,
  SET_PREFERENCES,
  SET_STEP_SUCCESS,
  CANCEL_BOOKING,
  STEP_BACK
} from '../actions/actionTypes';

const initialState = {
  flight: {},
  from: '',
  to: '',
  date: '',
  numPassengers: 1,
  bodyguards: 0,
  assistants: 0,
  food: 0,
  limo: 0,
  step: 'search',
  passengerDetails: [],
  preferences: []
}
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SEARCH_FLIGHTS:
      return {
        ...initialState,
        ...payload,
        step: 1
      };

    case SET_BOOKING_FLIGHT:
      return {
        ...state,
        flight: payload,
        step: 2
      };

    case SET_PASSENGER_DETAILS:
      return {
        ...state,
        step: 3,
        passengerDetails: payload
      }

    case SET_PREFERENCES:
      return {
        ...state,
        step: 4,
        preferences: payload
      }

    case SET_STEP_SUCCESS:
      return {
        ...state,
        step: 5
      }

    case CANCEL_BOOKING:
      return initialState;

    case STEP_BACK:
      return {
        ...state,
        step: state.step - 1
      }
    default:
      return state;
  }
}
