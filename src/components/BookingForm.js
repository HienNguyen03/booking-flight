import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setPassengerDetails, stepBack} from '../actions';

class BookingForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pass1Fullname: '',
      pass1Gender: '',
      pass1Firstname: '',
      pass1Lastname: '',
      pass1Email: '',
      pass1Phone: '',
      pass2Fullname: '',
      pass2Gender: '',
      pass2Firstname: '',
      pass2Lastname: '',
      pass2Email: '',
      pass2Phone: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state);
  }

  handleClick (event) {
    event.preventDefault();
    this.props.setPassengerDetails([
      {
        fullname: this.refs.pass1Fullname.value,
        gender: this.refs.pass1Gender.value,
        firstname: this.refs.pass1Firstname.value,
        lastname: this.refs.pass1Lastnamevalue,
        email: this.refs.pass1Email.value,
        phone: this.refs.pass1Phone.value
      },
      {
        fullname: this.refs.pass2Fullname.value,
        gender: this.refs.pass2Gender.value,
        firstname: this.refs.pass2Firstname.value,
        lastname: this.refs.pass2Lastname.value,
        email: this.refs.pass2Email.value,
        phone: this.refs.pass2Phone.value
      }
    ]);
  }

  handleBack() {
    this.props.stepBack();
  }

  render () {
    return (
      <div  className="booking-form">
        <form className="booking-form__form">
          <div className="booking-form__form--left">
            <div className="form__group">
              <span className="booking-form__header--main">Passenger 1 </span>
              <input ref="pass1Fullname" value={this.state.pass1Fullname} onChange={this.handleChange} className="booking-form__header--input form__input--booking" name="pass1Fullname" type="text" placeholder="John Smith"/>
            </div>

            <div className="form__group">
              <input ref="pass1Gender" value={this.state.pass1Gender} onChange={this.handleChange} className="form__input--booking" name="pass1Gender" type="text" placeholder="Male"/>
            </div>

            <div className="form__group">
              <input ref="pass1Firstname" value={this.state.pass1Firstname} onChange={this.handleChange} className="form__input--booking" name="pass1Firstname" type="text" placeholder="John"/>
            </div>

            <div className="form__group">
              <input ref="pass1Lastname" value={this.state.pass1Lastname} onChange={this.handleChange} className="form__input--booking" name="pass1Lastname" type="text" placeholder="Smith"/>
            </div>
          </div>

          <div className="booking-form__form--right">
            <div className="form__group">
              <input ref="pass1Email" value={this.state.pass1Email} onChange={this.handleChange}  className="form__input--booking" name="pass1Email" type="email" placeholder="john.smith@gmail.com"/>
            </div>

            <div className="form__group">
              <input ref="pass1Phone" value={this.state.pass1Phone} onChange={this.handleChange}  className="form__input--booking" name="pass1Phone" type="test" placeholder="1234567"/>
            </div>
          </div>
        </form>

        <form className="booking-form__form">
          <div className="booking-form__form--left">
            <div className="form__group">
              <span className="booking-form__header--main">Passenger 2 </span>
              <input ref="pass2Fullname" value={this.state.pass2Fullname} onChange={this.handleChange} className="booking-form__header--input form__input--booking" name="pass2Fullname" type="text" placeholder="New profile"/>
            </div>

            <div  className="form__group">
              <input ref="pass2Gender" value={this.state.pass2Gender} onChange={this.handleChange} className="form__input--booking" name="pass2Gender" type="text" placeholder="GENDER"/>
            </div>

            <div className="form__group">
              <input ref="pass2Firstname" value={this.state.pass2Firstname} onChange={this.handleChange} className="form__input--booking" name="pass2Firstname" type="text" placeholder="FIRST NAME"/>
            </div>

            <div className="form__group">
              <input ref="pass2Lastname" value={this.state.pass2Lastname} onChange={this.handleChange} className="form__input--booking" name="pass2Lastname" type="text" placeholder="LAST NAME"/>
            </div>
          </div>

          <div className="booking-form__form--right">
            <div className="form__group">
              <input ref="pass2Email" value={this.state.pass2Email} onChange={this.handleChange} className="form__input--booking" name="pass2Email" type="email" placeholder="EMAIL"/>
            </div>

            <div className="form__group">
              <input ref="pass2Phone" value={this.state.pass2Phone} onChange={this.handleChange} className="form__input--booking" name="pass2Phone" type="test" placeholder="TELEPHONE"/>
            </div>
          </div>
        </form>
        <div className="booking-form-control">
          <button onClick={this.handleClick} className="btn btn--control">Continue <span><i className="fa fa-caret-right"></i></span></button>
          <button onClick={this.handleBack} className="btn btn--control"><span><i className="fa fa-caret-left"></i></span> Back</button>
        </div>
      </div>

    )
  }
}

const mapDispatchToProps = {
  setPassengerDetails,
  stepBack
}

const mapStateToProps = (state) => {
  return {
    step: state.booking.step,
    passengerDetails: state.booking.passengerDetails
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
