import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setPreferences, stepBack} from '../actions';

class BookingPreferences extends Component {
  handleClick () {
    this.props.setPreferences([
      {
        food: this.refs.pass1Food.value,
        drink: this.refs.pass1Drink.value,
        allergy: this.refs.pass1Allergy.value,

      },
      {
        food: this.refs.pass2Food.value,
        drink: this.refs.pass2Drink.value,
        allergy: this.refs.pass2Allergy.value,
      }
    ]);
  }

  handleBack() {
    this.props.stepBack();
  }

  render () {
    return (
      <div  className="booking-form">
        <div className="booking-form__passenger">
          <h3>Passenger 1</h3>
          <div className="form__group">
            <input ref="pass1Food" className="form__input--booking" name="food" type="text" placeholder="Beef"/>
          </div>

          <div className="form__group">
            <input ref="pass1Drink" className="form__input--booking" name="drink" type="text" placeholder="Whiskey"/>
          </div>

          <div className="form__group">
            <input ref="pass1Allergy" className="form__input--booking" name="allergy" type="text" placeholder="None"/>
          </div>

          <h3>Passenger 2</h3>
          <div className="form__group">
            <input ref="pass2Food" className="form__input--booking" name="food" type="text" placeholder="FOOD"/>
          </div>

          <div className="form__group">
            <input ref="pass2Drink" className="form__input--booking" name="drink" type="text" placeholder="DRINK"/>
          </div>

          <div className="form__group">
            <input ref="pass2Allergy" className="form__input--booking" name="allergy" type="text" placeholder="ALLERGY"/>
          </div>

          <div className="booking-form-control">
            <button onClick={this.handleClick.bind(this)} className="btn btn--control">Continue <span><i className="fa fa-caret-right"></i></span></button>
            <button onClick={this.handleBack.bind(this)} className="btn btn--control"><span><i className="fa fa-caret-left"></i></span> Back</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  setPreferences,
  stepBack
}

export default connect(null, mapDispatchToProps)(BookingPreferences);
