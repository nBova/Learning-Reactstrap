import React from 'react';

class Button extends React.Component {
  render() {
    let button;
    if(this.props.method < 0){
      return(<button type="button" className="buttons" onClick={this.props.onClick}>-</button>)
    }
    else{
      return(<button type="button" className="buttons" onClick={this.props.onClick}>+</button>)
    }
  }
}

export default Button;
