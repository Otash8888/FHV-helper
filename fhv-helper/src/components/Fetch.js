import React, { Component } from 'react';
import Viewer from './Viewer.js'

let my_key = '4221d2-6285ff'
let api_jfk_arrivals = `http://aviation-edge.com/v2/public/timetable?key=${my_key}&iataCode=JFK&type=arrival`

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = { jfk_arrivals:[] };
  }


  componentDidMount() {
    fetch(api_jfk_arrivals)
    .then(function(response) {
      return response.json();
    })
    .then(myJson => {
      // filtering for upcoming flights
      let upcomingFlights = myJson.filter((flightObj) => {
        if (flightObj.status === 'unknown' || flightObj.status === 'cancelled' || flightObj.status === 'incident') {
          return false
        } else {
          let timeArrival = new Date(flightObj.arrival.estimatedTime)
          let timeNow = new Date()
          return timeNow < timeArrival
        }

      })
      //saving upcomingFlights in state
      this.setState({
        jfk_arrivals:upcomingFlights
      },() => {
        console.log(this.state.jfk_arrivals)
      })

    })
  }


  render() {
    let counter = 1
    let terminal4arrivals = this.state.jfk_arrivals.map((flightObj1) => {
      if (flightObj1.arrival.terminal === '4') {
        return <Viewer terminal = {flightObj1} key={counter += 1} />
      }

    })

    return (
      <div>
        <h1>"Airport Info" </h1>
        <h2>'Airline list'</h2>
        <ul>
          {terminal4arrivals}
        </ul>
      </div>
    );
  }
}

export default Fetch;
