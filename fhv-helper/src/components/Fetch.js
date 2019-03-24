import React, { Component } from 'react';

class Fetch extends Component {
  state = {
    fetched:{}
  }
  render() {

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        JSON.stringify(myJson);
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
