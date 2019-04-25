import React from 'react';

export default class DelayedButton extends Component {

  setTimeout = () => {
    this.props.onDelayedClick(event)
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
