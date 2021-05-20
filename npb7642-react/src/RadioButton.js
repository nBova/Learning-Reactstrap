import React from 'react';

class RadioButton extends React.Component {
  render() {
    return (
      <>
      <input type="radio" name="room" value={`room${this.props.room}`}/>Room {this.props.room}
      </>
    )
  }
}

export default RadioButton;
