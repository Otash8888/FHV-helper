import React, { Component } from 'react';

const Viewer = ({ terminal })=> {
  console.log(terminal)
  return (
    <li>{terminal.airline.name} </li>
  )
}

export default Viewer;
