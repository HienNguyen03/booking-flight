import {
  FETCH_FLIGHTS_SUCCESS,
  CANCEL_BOOKING
} from '../actions/actionTypes';

export default (state = [], {type, payload}) => {
  switch (type) {
    case FETCH_FLIGHTS_SUCCESS:
      return payload;

    case CANCEL_BOOKING:
      return [];

    default:
      return state;
  }
}
