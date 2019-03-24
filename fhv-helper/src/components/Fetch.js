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
    .then(myJson => {

      this.setState({
        fetched:JSON.stringify(myJson)
      })
      console.log(this.state.fetched)

    })
  }


  render() {



    return (
      <div>
        <h1>"Airport Info" </h1>
        <p> {`${this.state.fetched}`} </p>

      </div>
    );
  }
}

export default Fetch;
