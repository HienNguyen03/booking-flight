import React from 'react';

import '../styles/App.css';
import Booking from './Booking.js';
import Footer from './Footer.js';
import Navigation from './Navigation.js';
import Sidebar from './Sidebar.js';

const App = ({children}) => (
  <div>
    <div className="row">
      <div className="col-1-of-4">
        <Sidebar />
      </div>
      <div className="col-3-of-4">
        <Navigation />
        <Booking />
      </div>

    </div>
      <Footer />
  </div>
);
export default App;
