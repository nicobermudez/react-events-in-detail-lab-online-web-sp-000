import React from 'react';

export default class CoordinatesButton extends React.Component {

  findCoordinates = (event) => {
    const coordinatesArray = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinatesArray)
  }

  render() {
    return(
      <button
      onClick={this.findCoordinates}
      >
      </button>
    )
  }
}
