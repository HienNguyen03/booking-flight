import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchFlights, setBookingFlight} from '../actions';

class SelectFlight extends Component {
  render () {
    const {flights} = this.props;
    let flightRows;
    if (flights.length > 0) {
      flightRows = flights.map((data) => {
        return (
          <tr onClick={() => this.props.setBookingFlight(data)} key={data.id}>
            <td>EUR {data.price}</td>
            <td>{data.stopovers}</td>
            <td>{data.duration}</td>
            <td>{data.timeFrom}</td>
            <td>{data.timeTo}</td>
          </tr>
        );
      })
    }
    return (
      <div className="select-flight">
        <div className="tabs-header">
          <div className="tabs-header__item">
            <a href="#day1" className="tabs-header__link">
              <span className="tabs-header__link--day">16 Dec</span>
              <span className="tabs-header__link--price">EUR 2000</span>
            </a>
          </div>

          <div className="tabs-header__item">
            <a href="#day1" className="tabs-header__link">
              <span className="tabs-header__link--day">17 Dec</span>
              <span className="tabs-header__link--price">EUR 2000</span>
            </a>
          </div>

          <div className="tabs-header__item">
            <a href="#day1" className="tabs-header__link">
              <span className="tabs-header__link--day">18 Dec</span>
              <span className="tabs-header__link--price">EUR 2000</span>
            </a>
          </div>

          <div className="tabs-header__item">
            <a href="#day1" className="tabs-header__link">
              <span className="tabs-header__link--day">19 Dec</span>
              <span className="tabs-header__link--price">EUR 2000</span>
            </a>
          </div>

          <div className="tabs-header__item">
            <a href="#day1" className="tabs-header__link">
              <span className="tabs-header__link--day">20 Dec</span>
              <span className="tabs-header__link--price">EUR 2000</span>
            </a>
          </div>

          <div className="tabs-header__item">
            <a href="#day1" className="tabs-header__link">
              <span className="tabs-header__link--day">21 Dec</span>
              <span className="tabs-header__link--price">EUR 2000</span>
            </a>
          </div>
          <div className="tabs-header__control">
            <button className="btn--tab"><span><i className="fa fa-caret-left"></i></span></button>
            <button className="btn--tab btn--right"><span><i className="fa fa-caret-right"></i></span></button>
          </div>
        </div>

        <table className="flights-table">
          <thead className="flights-table__head">
            <tr>
              <th>Price</th>
              <th>Stopovers</th>
              <th>Duration</th>
              <th>From:</th>
              <th>To:</th>
            </tr>
          </thead>
          <tbody className="flights-table__body">
            {flightRows}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapDispatchToProps = {
  fetchFlights,
  setBookingFlight
}

const mapStateToProps = (state) => {
  return {
    booking: state.booking,
    flights: state.flights
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectFlight);
