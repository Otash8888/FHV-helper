import React, { Component } from 'react';

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
        let timeArrival = new Date(flightObj.arrival.estimatedTime)
        let timeNow = new Date()
        return timeNow < timeArrival
      })
      //saving in state
      this.setState({
        jfk_arrivals:upcomingFlights
      },() => {
        console.log(this.state.jfk_arrivals)
      })

    })
  }


  render() {
    return (
      <div>
        <h1>"Airport Info" </h1>
      </div>
    );
  }
}

export default Fetch;
