# Booking Flight App
Link to the [LIVE DEMO](https://secret-caverns-52556.herokuapp.com/)

## Table of Contents
* [Requirements](#requirements)
* [Installation](#installation)
* [Usage](#usage)
   - [SearchFlights](#SearchFlights)
   - [BookingForm](#BookingForm)
* [Libraries](#libraries)

## Requirements

Booking Flight App requires the following to run:
* [Node.js](https://nodejs.org/en)
* [npm](https://www.npmjs.com) – Normally comes with `Node.js`


## Installation

At first you need to clone or download the app from the [link](https://github.com/HienNguyen03/booking-flight-app)

Next, go to project folder and initialize the app:
```sh
cd booking-flight-app
npm install
```

`npm` will download all the necessary files, then you can start the app with command
```sh
npm run start
```

The app will boot up in a couple of seconds. You can also enter the link [http://localhost:3000](http://localhost:3000) directly on the browser if somehow it does not show up.


## Usage

### SearchFlights
This website begins with BookingFligt page. To search for a flight, users provide search flight information which are `from`, `to`, `date`, `number of passenger`, `bodyguards`, `personal assistant`, `custom food`, `limousine` on sidebar's form. After submit the search form, search result will be display which is a table of flights base on `from`, `to`, `date` data.

### BookingForm
Users choose a flight by clicking to a row of the search result. The website will display `BookingForm` and `BookingPreferences` forms. After filling these forms, users hit `Continue` to view booking's summary. Finally, users hit `Confirm` to complete booking.
Users can cancel order at any step of booking by clicking `Cancel Booking`.

## Libraries
This app used `React` to render UI along with `Redux` to handle app's state.
`Redux Thunk` was used to write actions for handle asynchronous action.
For the CSS, `Sass` was used to be able to split styles and store them together with the components.
