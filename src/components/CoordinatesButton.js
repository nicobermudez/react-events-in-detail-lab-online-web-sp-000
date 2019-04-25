import React from 'react';

export default class CoordinatesButton extends Component {

  findCoordinates = (event) => {
    const coordinatesArray = [
      event.clientX,
      event.clientY
    ]
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
