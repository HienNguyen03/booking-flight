import {combineReducers}  from 'redux';

import booking from './booking';
import flights from './flights';

export default combineReducers({
  booking,
  flights
});
