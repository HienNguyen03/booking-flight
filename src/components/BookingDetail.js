import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookingDetail extends Component {
  render () {
    let {booking} = this.props;

    return (
      <div>
        <div className="booking-detail">
          <div className="booking-detail__item">
            <h3>Flight</h3>
            <p className="u-capital">{booking.flight.from} - {booking.flight.to}</p>
            <p>{booking.flight.date}</p>
            <p>{booking.flight.timeFrom} - {booking.flight.timeTo} (CET)</p>
          </div>
          <div className="booking-detail__item">
            <h3>Extra Services</h3>
            <p>Bodygaurds: {booking.bodyguards}</p>
            <p>Personal Assistants: {booking.assistants}</p>
            <p>Custom food: {booking.food}</p>
            <p>Limousine: {booking.limo}</p>
          </div>
          <div className="booking-detail__item">
            <h3>Price</h3>
            <p>EUR</p>
            <p>{booking.flight.price}</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    booking: state.booking
  }
}

export default connect(mapStateToProps)(BookingDetail);
