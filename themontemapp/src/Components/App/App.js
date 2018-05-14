import React, { Component } from 'react';
import './App.css';
import Button from '../Button/Button';

class App extends Component {

  onButtonPress = (buttonValue) => {
    console.log(buttonValue);
  }

  render() {
    return (
      <div>
        This is the app component
        <Button text="test test test" returnValue="Ja" onClick={this.onButtonPress} imageSource="/assets/img/icon-right.svg"></Button>
      </div>
    );
  }
}

export default App;
