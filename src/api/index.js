import flights from './mockFlights';

export const fetchFlightsApi = async (flightFrom, flightTo, FlightDate) => {
  return new Promise((resolve, reject) => {
    const result = flights.filter(flight => flight.date === FlightDate && flight.from === flightFrom && flight.to === flightTo);
    resolve(result)
  })
}
