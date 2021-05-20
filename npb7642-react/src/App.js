//import logo from './logo.svg';
import React from 'react';
import Classroom from './Classroom';
import './App.css';

  class App extends React.Component {
    render(){
      return (
        <>
          <h1>COVID Classroom Capacity</h1>
          <h3>Each time someone enters/ leaves the classroom, select the room and click the appropriate button</h3>
          <div className="container">
            <Classroom room="1" midCap="10" maxCap="20"/>
            <Classroom room="2" midCap="12" maxCap="18"/>
            <Classroom room="3" midCap="8" maxCap="12"/>
            <Classroom room="4" midCap="18" maxCap="22"/>
          </div>
        </>
    );
   }
}

export default App;
