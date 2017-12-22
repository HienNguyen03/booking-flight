import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookingStatus extends Component {
  render () {
    return (
      <div  className="booking-status">
        <div className="booking-status__item">
          <span>Select Flight</span>
        </div>

        <div className="booking-status__item">
          <span>Passenger Detail</span>
        </div>

        <div className="booking-status__item">
          <span>Preferences</span>
        </div>

        <div className="booking-status__item">
          <span>Confirmation</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.booking.step
  };
}

export default connect(mapStateToProps)(BookingStatus);
