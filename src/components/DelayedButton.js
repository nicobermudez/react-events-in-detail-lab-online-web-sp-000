import React from 'react';

export default class DelayedButton extends Component {

  setTimeout = () => {
    
  }

  render() {
    return (
      <button
      onClick={this.handleClick}
      >Delayed
      </button>
    )
  }
}
