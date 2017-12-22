import React from 'react';

const Footer = () => {
  return (
    <div className="row">
      <footer className="footer">
        <div className="footer__contact">
          <p className="data-text">ExecExpress Gmbh</p>
          <p className="data-text">12 Lebenstrasen, Frankurt</p>
          <p className="data-text">Telephone: +123445678</p>
          <p className="data-text">Email: contact@execexpress.com</p>
        </div>

        <div className="footer__feedback">
          <h3 className="u-margin-bottom-small">Feedback</h3>
          <form className="form">
              <div className="form__group">
                <div className="footer__form--left"><label htmlFor="message">Message</label></div>
                <div className="footer__form--right"><textarea className="form__input--footer" name="message" rows="4"></textarea></div>
              </div>
              <div className="form__group">
                <button className="btn btn--footer">Submit</button>
              </div>
          </form>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
