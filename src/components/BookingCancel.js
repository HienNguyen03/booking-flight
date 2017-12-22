import React, {Component} from 'react';
import {connect} from 'react-redux';

import {cancelBooking} from '../actions';

class BookingCancel extends Component {
  handleClick () {
    this.props.cancelBooking();
  }
  
  render () {
    return (
      <button onClick={this.handleClick.bind(this)} className="btn btn--cancel">Cancel Booking</button>
    )
  }
}

const mapDispatchToProps = {
  cancelBooking
};

export default connect(null, mapDispatchToProps)(BookingCancel);
