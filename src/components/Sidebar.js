import React, {Component} from 'react';
import {connect} from 'react-redux';

import {searchFlights, fetchFlights} from '../actions';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let date = new Date(this.refs.date.value);
    let dateParsed = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    this.props.searchFlights(
      {
        from: this.refs.from.value.toLowerCase(),
        to: this.refs.to.value.toLowerCase(),
        date: dateParsed,
        numPassengers: this.refs.numPassengers.value,
        bodyguards: this.refs.bodyguards.value,
        assistants: this.refs.assistants.value,
        food: this.refs.food.value,
        limo: this.refs.limo.value
      }
    );

    this.props.fetchFlights(this.refs.from.value.toLowerCase(), this.refs.to.value.toLowerCase(), dateParsed);
  }

  render() {
    return (
      <div className="sidebar">
        <div className="account-box">
            <div className="account-box__menu">
              <div className="account-box__menu--lef">
                <p className="data-text">Welcome,</p>
                <p className="data-text--main">ABC Inc.</p>
              </div>
            </div>
            <div className="account-box__feature">
              <span className="data-text">Outstanding</span>
              <span className="data-text">EUR 8,000</span>
            </div>
        </div>

        <div className="sidebar__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">ExecExpress</span>
            <span className="heading-primary--sub">There&#39;s safer way to travel</span>
          </h1>
        </div>

        <div className="sidebar__form">
          <form className="form" onSubmit={this.handleSubmit}>
            <h3 className="u-margin-bottom-small">Booking</h3>
            <div className="form__group">
              <input ref="from" className="form__input" name="from" type="text"  placeholder="FRANKURT"/>
            </div>

            <div className="form__group">
              <input ref="to" className="form__input" name="to" type="text"  placeholder="HELSINKI"/>
            </div>

            <div className="form__group">
              <input ref="date" className="form__input" name="date" type="date" placeholder="DATE" min="2017-12-16" max="2017-12-21"/>
            </div>

            <div className="form__group">
              <input ref="numPassengers" className="form__input" name="passengers" type="number" placeholder="PASSENGERS"/>
            </div>

            <div className="form__group">
              <input ref="bodyguards" className="form__input" name="bodyguards" type="number" placeholder="BODYGUARDS"/>
            </div>

            <div className="form__group">
              <input ref="assistants" className="form__input" name="assit" type="number" placeholder="PERSONAL ASSITANTS"/>
            </div>

            <div className="form__group">
              <input ref="food" className="form__input" name="food" type="number" placeholder="CUSTOM FOOD"/>
            </div>

            <div className="form__group">
              <input ref="limo" className="form__input" name="limo" type="number" placeholder="LIMOUSINE"/>
            </div>

            <div className="form__group">
              <img src="images/norton.png" alt="Norton" className="form__image"/>
              <button className="btn btn--primary" type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  searchFlights,
  fetchFlights
};

export default connect(null, mapDispatchToProps)(Sidebar);
