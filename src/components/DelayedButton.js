import React from 'react';

export default class DelayedButton extends Component {
  handleClick = () => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
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
