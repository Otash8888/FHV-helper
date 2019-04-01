import React, { Component } from 'react';
import Viewer from './Viewer.js'

let my_key = '4221d2-6285ff'
let api_jfk_arrivals = `http://aviation-edge.com/v2/public/timetable?key=${my_key}&iataCode=JFK&type=arrival`
let api_lga_arrivals = `http://aviation-edge.com/v2/public/timetable?key=${my_key}&iataCode=LGA&type=arrival`
let timeNow = new Date()

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = { jfk_arrivals:[] };
  }


  componentDidMount() {

    //true ? api_jfk_arrivals : api_lga_arrivals
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
          return timeNow < timeArrival
        }

      })
      //saving upcomingFlights in state
      this.setState({
        jfk_arrivals:upcomingFlights
      },() => {
        console.log(this.state.jfk_arrivals)
      })

      // for LGA setState
      // this.setState({
      //   lga_arrivals:upcomingFlights
      // },() => {
      //   console.log(this.state.lga_arrivals)
      // })

    })
  }


  render() {
    // per terminal info
    let counterKey = 1
    let terminal4arrivals = this.state.jfk_arrivals.map((flightObj1) => {
      if (flightObj1.arrival.terminal === '4') {
        return <Viewer terminal = {flightObj1} key={counterKey += 1} />
      }
    })

    let onePlusHour = this.state.jfk_arrivals.filter((flightObj1) => {
      let timePlus = new Date()
      timePlus.setHours(timePlus.getHours() + 1)
      let timeArrival = new Date(flightObj1.arrival.estimatedTime)

      return timeNow < timeArrival && timeArrival < timePlus

    })
    console.log(onePlusHour)
    return (
      <div>
        <h1>"Airport Info" </h1>
        <h3>{`Total JFK upcoming flights: ${this.state.jfk_arrivals.length}`}</h3>
        <h3>{`Next hour flights number: ${onePlusHour.length}`}</h3>
        <h2>'Terminal 4 Airline list'</h2>
        <ul>
          {terminal4arrivals}
        </ul>
      </div>
    );
  }
}

export default Fetch;
