import React from 'react';
import Button from './Button';

class Classroom extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddStudent = this.handleAddStudent.bind(this);
    this.handleSubtractStudent = this.handleSubtractStudent.bind(this);
    this.state = {
      occupants: 0,
      status: "lowCap",
      statusMessage: "Welcome"
    };
  }

  handleAddStudent() {
    var occupants = this.state.occupants;
    occupants++;
    this.setState({occupants: occupants}, function() {
      this.CheckCap();
    });
  }

  handleSubtractStudent() {
    var occupants = this.state.occupants;
    if(occupants > 0){
      occupants--;
    }
    this.setState({occupants: occupants}, function() {
      this.CheckCap();
    });
  }

  CheckCap(){
    console.log(this.state.occupants);
    if(this.state.occupants < this.props.midCap){
      this.setState({status: "lowCap", statusMessage: "Welcome"});
    }
    else if(this.state.occupants >= this.props.midCap && this.state.occupants < this.props.maxCap){
      this.setState({status: "midCap", statusMessage: "Careful..."});
    }
    else if(this.state.occupants >= this.props.maxCap){
      this.setState({status: "maxCap", statusMessage: "Run!"});
    }
  }

  render() {
    return (
      <>
        <div>
          <div className={`rooms ${this.state.status}`}>
            <h2 id={`room${this.props.room}`}>
                Room {this.props.room}
            </h2>
            <h3>{this.state.statusMessage}</h3>
          </div>
          <h3 className="studentCount">{this.state.occupants}</h3>
          <div className="buttonContainer">
            <Button method="-1" onClick={() => this.handleSubtractStudent()}/>
            <Button method="1" onClick={() => this.handleAddStudent()}/>
          </div>
        </div>
      </>
    )
  }
}

export default Classroom;
