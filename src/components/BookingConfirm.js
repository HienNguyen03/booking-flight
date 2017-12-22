import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setStepSuccess, stepBack} from '../actions';

class BookingConfirm extends Component {
  handleClick () {
    this.props.setStepSuccess();
  }

  handleBack() {
    this.props.stepBack();
  }

  render () {
    const {booking} = this.props;
    let totalPrice = booking.passengerDetails.length * booking.flight.price;
    return (
      <div className="booking-confirm">
        <h2 className="heading-secondary">booking confirmation</h2>
        <div className="booking-confirm__list">
          <div className="booking-confirm__item">
            <h2>Flight details</h2>
            <p className="u-capital">{booking.flight.from} - {booking.flight.to}</p>
            <p>{booking.flight.date}</p>
            <p>{booking.flight.timeFrom} - {booking.flight.timeTo} CET</p>
          </div>
          <div className="booking-confirm__item">
            <h2>Extra Services</h2>
            <p>Bodygaurds: {booking.bodyguards}</p>
            <p>Personal Assistants: {booking.assistants}</p>
            <p>Custom food: {booking.food}</p>
            <p>Limousine: {booking.limo}</p>
          </div>
        </div>

        <h2>Passenger details</h2>
        <h3>Passenger 1: </h3>
        <div className="booking-confirm__list">
          <div className="booking-confirm__item">
            <p><span>Name: </span> {booking.passengerDetails[0].fullname}</p>
            <p><span>Gender: </span>{booking.passengerDetails[0].gender}</p>
            <p><span>Email: </span>{booking.passengerDetails[0].email}</p>
            <p><span>Telephone: </span>{booking.passengerDetails[0].email}</p>
          </div>
          <div className="booking-confirm__item">
            <p><span>Food: </span>{booking.preferences[0].food}</p>
            <p><span>Drink: </span>{booking.preferences[0].drink}</p>
            <p><span>Allergy: </span>{booking.preferences[0].allergy}</p>
          </div>
        </div>
        <hr/>
        <div>
          <h2>Passenger details</h2>
          <h3>Passenger 2: </h3>
          <div className="booking-confirm__list">
            <div className="booking-confirm__item">
              <p><span>Name: </span> {booking.passengerDetails[1].fullname}</p>
              <p><span>Gender: </span>{booking.passengerDetails[1].gender}</p>
              <p><span>Email: </span>{booking.passengerDetails[1].email}</p>
              <p><span>Telephone :</span>{booking.passengerDetails[1].email}</p>
            </div>
            <div className="booking-confirm__item">
              <p><span>Food: </span>{booking.preferences[1].food}</p>
              <p><span>Drink: </span>{booking.preferences[1].drink}</p>
              <p><span>Allergy: </span>{booking.preferences[1].allergy}</p>
            </div>
          </div>
        </div>


        <h2>booking total amount: EUR 3100</h2>
        <table className="booking-confirm__table">
          <tbody>
            <tr>
              <td>Flight tickets</td>
              <td>EUR {totalPrice}</td>
            </tr>
            <tr>
              <td>Personal Assistants</td>
              <td>EUR 200</td>
            </tr>
            <tr>
              <td>Bodygaurds</td>
              <td>EUR 400</td>
            </tr>
          </tbody>
        </table>

        <h2>OUTSTANDING PAYMENT AFTER PURCHASE: EUR 11100</h2>
          <div className="booking-form-control">
            <button onClick={this.handleClick.bind(this)} className="btn btn--control">Confirm</button>
            <button onClick={this.handleBack.bind(this)} className="btn btn--control"><span><i className="fa fa-caret-left"></i></span> Back</button>
          </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  setStepSuccess,
  stepBack
};

const mapStateToProps = (state) => {
  return {
    booking: state.booking
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingConfirm);
