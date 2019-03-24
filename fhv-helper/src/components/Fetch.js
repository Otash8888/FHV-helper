import React, { Component } from 'react';

class Fetch extends Component {

  render() {

    let airportInfoFetch = () => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      })
    }

    return (
      <div>
        <h1>"Airport Info" {airportInfoFetch()}</h1>

      </div>
    );
  }
}

export default Fetch;
