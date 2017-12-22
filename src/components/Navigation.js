import React from 'react';

const Navigation = () => {
  return (
    <nav className="navigator">
      <ul className="navigator__list">
        <li className="navigator__item u-active">
          <a href="#booking" className="navigator__link"><span><i className="fa fa-plane"></i></span>Booking</a>
        </li>
        <li className="navigator__item">
          <a href="#booked" className="navigator__link"><span><i className="fa fa-list-alt"></i></span>Booked flight</a>
        </li>
        <li className="navigator__item">
          <a href="#profile" className="navigator__link"><span><i className="fa fa-user"></i></span>Manage Profile</a>
        </li>
        <li className="navigator__item">
          <a href="#payment" className="navigator__link"><span><i className="fa fa-history"></i></span>Payment</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
