import React, { Component } from 'react';

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = { fetched:{} };
  }
  

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      this.setState({
        fetched:JSON.stringify(myJson)
      })

    })
  }

  render() {



    return (
      <div>
        <h1>"Airport Info" {this.state.fetched}</h1>

      </div>
    );
  }
}

export default Fetch;
