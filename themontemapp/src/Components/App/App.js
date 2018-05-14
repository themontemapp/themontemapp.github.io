import React, { Component } from 'react';
import './App.css';
import Slider from '../Slider/Slider';

import { getData } from '../../Data/dataStructure'

class App extends Component {

  onButtonPress = (buttonValue) => {
    console.log(buttonValue);
  }

  render() {

    console.log(getData());
    return (
      <div>
        This is the app component
        <div className='dock-slider'>
          <Slider  />
        </div>

      </div>
    )
  }
}

export default App;
  