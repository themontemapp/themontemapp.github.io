import React, { Component } from 'react';
import './App.css';
import Slider from '../Slider/Slider';

class App extends Component {
  render() {
    return (
      <div>
        This is the app component
        <div className='dock-slider'>
          <Slider />
        </div>
      </div>
    );
  }
}

export default App;
  