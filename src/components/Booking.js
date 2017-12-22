import React, {Component} from 'react';
import {connect} from 'react-redux';

import BookingCancel from './BookingCancel';
import BookingConfirm from './BookingConfirm';
import BookingDetail from './BookingDetail';
import BookingForm from './BookingForm';
import BookingPreferences from './BookingPreferences';
import BookingStatus from './BookingStatus';
import BookingSuccess from './BookingSuccess';
import SelectFlight from './SelectFlight';

class Booking extends Component {
  render() {
    let {step} = this.props;

    let selectFlight, cancelBtn, bookingStatus, bookingDetail, bookingForm, bookingConfirm, bookingSuccess;
    if (step === 1 ) {
      selectFlight = <SelectFlight />;
      cancelBtn = <BookingCancel/>;
      bookingStatus = <BookingStatus />;
    }
    if (step === 2) {
      selectFlight = '';
      bookingForm = <BookingForm />;
      cancelBtn = <BookingCancel/>;
      bookingStatus = <BookingStatus />;
      bookingDetail = <BookingDetail />
    }
    if (step === 3) {
      selectFlight = '';
      bookingForm = <BookingPreferences />;
      cancelBtn = <BookingCancel/>;
      bookingStatus = <BookingStatus />;
      bookingDetail = <BookingDetail />
    }
    if (step === 4) {
      selectFlight = '';
      bookingForm = '';
      bookingConfirm = <BookingConfirm />;
      cancelBtn = <BookingCancel/>;
      bookingStatus = <BookingStatus />;
    }
    if (step === 5) {
      selectFlight = '';
      bookingForm = '';
      bookingConfirm = '';
      cancelBtn = '';
      bookingStatus = '';
      bookingSuccess = <BookingSuccess />
    }

    return (
      <div className="booking">
        {bookingDetail}
        {selectFlight}
        {bookingForm}
        {bookingConfirm}
        {cancelBtn}
        {bookingStatus}
        {bookingSuccess}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.booking.step
  };
}


export default connect(mapStateToProps)(Booking);
